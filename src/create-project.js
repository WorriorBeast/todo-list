export function createProject(createProjectInstances) {
   for (let i = 0; i < createProjectInstances.length; i++) {
      Object.getOwnPropertyNames(Object.getPrototypeOf(createProjectInstances[i]))
      .filter(methodName => (methodName !== 'constructor')).map(method => createProjectInstances[i][method]());
   }
};