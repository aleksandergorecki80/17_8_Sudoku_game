import React from "react";

class LifeStages extends React.Component {
 componentWillMount() {
  console.log("Component " + this.props.componentName + " will mount");
 }

 componentDidMount() {
  console.log("Component " + this.props.componentName + " did mount ");
 }

 componentWillReceiveProps(nextProps) {
  console.log(
   "Component " + this.props.componentName + " will receive props",
   nextProps
  );
 }

 shouldComponentUpdate(nextProps, nextState) {
  console.log(
   "Should component " + this.props.componentName + " update",
   nextProps,
   nextState
  );
  return true;
 }

 componentWillUpdate(nextProps, nextState) {
  console.log(
   "Component " + this.props.componentName + " will update ",
   nextState,
   nextProps
  );
 }

 componentDidUpdate(prevProps, prevState) {
  console.log(
   "Component " + this.props.componentName + " did update",
   prevProps,
   prevState
  );
 }

 componentWillUnmount() {
  console.log("Component " + this.props.componentName + " will unmount");
 }

 render() {
  return null;
 }
}

export default LifeStages;


