function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function refReplacer() {
  let m = new Map(),
    v = new Map(),
    init = null;

  return function (field, value) {
    let p = m.get(this) + (Array.isArray(this) ? `[${field}]` : "." + field);
    let isComplex = value === Object(value);

    if (isComplex) m.set(value, p);

    let pp = v.get(value) || "";
    let path = p.replace(/undefined\.\.?/, "");
    let val = pp ? `#REF:${pp[0] == "[" ? "$" : "$."}${pp}` : value;

    !init ? (init = value) : val === init ? (val = "#REF:$") : 0;
    if (!pp && isComplex) v.set(value, path);

    return val;
  };
}

function parseRefJSON(json) {
  let objToPath = new Map();
  let pathToObj = new Map();
  let o = JSON.parse(json);

  let traverse = (parent, field) => {
    let obj = parent;
    let path = "#REF:$";

    if (field !== undefined) {
      obj = parent[field];
      path =
        objToPath.get(parent) +
        (Array.isArray(parent) ? `[${field}]` : `${field ? "." + field : ""}`);
    }

    objToPath.set(obj, path);
    pathToObj.set(path, obj);

    let ref = pathToObj.get(obj);
    if (ref) parent[field] = ref;

    for (let f in obj) if (obj === Object(obj)) traverse(obj, f);
  };

  traverse(o);
  return o;
}

export { storageAvailable, refReplacer, parseRefJSON };
