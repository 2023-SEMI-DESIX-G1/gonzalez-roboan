(() => {
    const Utils = {
      get: (id) => document.getElementById(id),
    };
    const Data = {
      async getData(value) {
        return await fetch(value);
      },
    };
    document.Utils = Utils;
    document.Data = Data;
  })();