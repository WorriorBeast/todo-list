import { default as SideBarProjectTab } from "./sidebar-project-tab";
import { Form, Header, Description, Checklist, Notes, Submit, Priority } from "./project-form";

const createProjectInstances = [
   new SideBarProjectTab(),
   new Form(),
   new Header(),
   new Description(),
   new Checklist(),
   new Notes(),
   new Priority,
   new Submit()
];

export function createProject() {
   for (let i = 0; i < createProjectInstances.length; i++) {
      Object.getOwnPropertyNames(Object.getPrototypeOf(createProjectInstances[i]))
      .filter(methodName => (methodName !== 'constructor')).map(method => createProjectInstances[i][method]());
   }
}