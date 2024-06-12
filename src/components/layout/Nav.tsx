import { DrawerProps } from "@fluentui/react-components";
import { Label, makeStyles, Radio, RadioGroup, tokens, useId } from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  bundleIcon,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  HeartPulse20Filled,
  HeartPulse20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  People20Filled,
  People20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  Person20Filled,
  Person20Regular,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  Settings20Filled,
  Settings20Regular,
} from "@fluentui/react-icons";
import {
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerFooter,
  NavDrawerHeader,
  NavDrawerHeaderNav,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

const Person = bundleIcon(Person20Filled, Person20Regular);
const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(PersonLightbulb20Filled, PersonLightbulb20Regular);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(PreviewLink20Filled, PreviewLink20Regular);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Interviews = bundleIcon(People20Filled, People20Regular);
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular);
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular);
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular);
const Reports = bundleIcon(DocumentBulletListMultiple20Filled, DocumentBulletListMultiple20Regular);
const Settings = bundleIcon(Settings20Filled, Settings20Regular);

type DrawerType = Required<DrawerProps>["type"];

export const NavDrawerDefault = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles();

  const labelId = useId("type-label");

  const [isOpen, setIsOpen] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");

  return (
    <div className={styles.root}>
      <NavDrawer defaultSelectedCategoryValue="1" defaultSelectedValue="2" open={isOpen} type={type}>
        <NavDrawerHeader>
          <NavDrawerHeaderNav>
            <Hamburger onClick={() => setIsOpen(false)} />
          </NavDrawerHeaderNav>
        </NavDrawerHeader>
        <NavDrawerBody>
          <NavSectionHeader>Home</NavSectionHeader>
          <NavItem href="https://www.bing.com" icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<Announcements />} value="2">
            Announcements
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<EmployeeSpotlight />} value="3">
            Employee Spotlight
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<Search />} value="4">
            Profile Search
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<PerformanceReviews />} value="5">
            Performance Reviews
          </NavItem>

          <NavSectionHeader>Employee Management</NavSectionHeader>
          <NavCategory value="6">
            <NavCategoryItem icon={<JobPostings />}>Job Postings</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="https://www.bing.com" value="7">
                Openings
              </NavSubItem>
              <NavSubItem href="https://www.bing.com" value="8">
                Submissions
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavItem icon={<Interviews />} value="9">
            Interviews
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<HealthPlans />} value="10">
            Health Plans
          </NavItem>

          <NavSectionHeader>Benefits</NavSectionHeader>
          <NavItem icon={<HealthPlans />} value="10">
            Health Plans
          </NavItem>
          <NavCategory value="11">
            <NavCategoryItem icon={<Person />} value="12">
              Retirement
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="https://www.bing.com" value="13">
                Plan Information
              </NavSubItem>
              <NavSubItem href="https://www.bing.com" value="14">
                Fund Performance
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavSectionHeader>Learning</NavSectionHeader>
          <NavItem icon={<TrainingPrograms />} value="15">
            Training Programs
          </NavItem>
          <NavCategory value="16">
            <NavCategoryItem icon={<CareerDevelopment />}>Career Development</NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="https://www.bing.com" value="17">
                Career Paths
              </NavSubItem>
              <NavSubItem href="https://www.bing.com" value="18">
                Planning
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavSectionHeader>Analytics</NavSectionHeader>
          <NavItem icon={<Analytics />} target="_blank" value="19">
            Workforce Data
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<Reports />} value="20">
            Reports
          </NavItem>
        </NavDrawerBody>
        <NavDrawerFooter>
          <NavItem href="https://www.bing.com" icon={<Person />} value="21">
            Profile
          </NavItem>
          <NavItem href="https://www.bing.com" icon={<Settings />} value="24">
            App Settings
          </NavItem>
        </NavDrawerFooter>
      </NavDrawer>
      <div className={styles.content}>
        {!isOpen && <Hamburger onClick={() => setIsOpen(true)} />}
        <div className={styles.field}>
          <Label id={labelId}>Type</Label>
          <RadioGroup aria-labelledby={labelId} value={type} onChange={(_, data) => setType(data.value as DrawerType)}>
            <Radio label="Overlay (Default)" value="overlay" />
            <Radio label="Inline" value="inline" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};