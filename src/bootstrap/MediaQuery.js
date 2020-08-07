import _ from "lodash";

export function mediaQuery(element) {
  let result = _.map(element, function(element) {
    if (element.value === null) {
      return "";
    } else if (element.value.constructor === Array) {
      let bpMap = ["xs", "sm", "md", "lg"];
      let attrs = element.value.concat(
        Array(bpMap.length - element.value.length).fill(
          element.value[element.value.length - 1]
        )
      );
      let classes = _.map(attrs, function(attr, index) {
        return `${element.attr}-${bpMap[index]}-${attr}`;
      });
      return classes.join(" ");
    } else {
      return `${element.attr}-${element.value}`;
    }
  });
  return result.filter(v => v !== "").join(" ");
}
