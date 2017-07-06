export const View = function () {

    let self = {};

    let viewName = "Inbox";

    self.setName = (name) => {
        viewName = name;
    };

    self.getName = function () {
        return viewName;
    };

    return self;

}();

/*export default View = () => {
 let name = "Inbox";

 return {
 setName: (name) => {
 this.name = name;
 },

 getName: () => {
 return self.name;
 }
 }
 }*/

