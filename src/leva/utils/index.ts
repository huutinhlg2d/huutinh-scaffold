import { useStoreContext } from "leva";
import { Data, DataInput, DataItem } from "leva/src/types";
import _ from "lodash";
import { useMemo } from "react";

const checkDataInput = (data: DataItem): data is DataInput => {
  return "value" in data;
};

export const getValues = <Schema extends Record<string, any>, Key extends keyof Schema = keyof Schema, Resolve = any>(
  data: Data,
  keys?: Key[],
  resolveFuc?: (data: Record<keyof Schema, any>) => Resolve,
): Resolve => {
  let values: Record<keyof Schema, any> | null = null;

  if (_.isEmpty(keys)) {
    values = _.reduce(
      data,
      (acc, item) => {
        if (checkDataInput(item)) {
          return _.set(acc, item.key, item.value);
        } else return acc;
      },
      {} as Record<keyof Schema, any>,
    );
  } else {
    values = _.reduce(
      keys,
      (acc, key) => {
        const findData = _.find(data, (curr) => curr.key === key);
        if (findData && checkDataInput(findData)) {
          return _.set(acc, key, findData.value);
        }
        return acc;
      },
      {} as Record<keyof Schema, any>,
    );
  }

  return resolveFuc ? resolveFuc(values) : (values as Resolve);
};

export const selectActionCreator = <Resolve = any>(selector?: (schema: any) => Resolve): ((state: any) => Resolve) => {
  return (state) => {
    const { data } = state;
    const values = getValues(data);
    return selector ? selector(values) : values;
  };
};

export const useLevaContext = <SchemaValues = any>() => {
  const context = useStoreContext();

  const select = <Resolve = any, Schema extends SchemaValues = SchemaValues>(
    selector: (schema: Schema) => Resolve,
  ): Resolve => {
    return context.useStore(selectActionCreator(selector));
  };

  const set = <Payload extends SchemaValues = SchemaValues>(payload: Partial<Payload>) => {
    const data = context.getData();

    const newSetData = _.reduce(
      payload,
      (acc, value, key) => {
        const [dataKey] = _.find(_.toPairs(data), ([_dataKey, dataValue]) => dataValue.key === key) ?? [];
        const newData = dataKey ? { [dataKey]: value } : {};
        return _.mergeWith(acc, newData);
      },
      {} as Record<string, any>,
    );

    context.set(newSetData, false);
  };

  return useMemo(() => ({ select, set }), [context]);
};
