import { Data, DataInput, DataItem, State } from "leva/src/types";
import _ from "lodash";

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

export const select = <Resolve = any>(selector: (schema: any) => Resolve): ((state: any) => Resolve) => {
  return (state) => {
    const { data } = state;
    const values = getValues(data);
    return selector(values);
  };
};
