// TODO
// var Cucumbers = () =>(<span>Cucumbers</span>);

// var Kale = () =>(<span>Kale</span>);

// var list = ['Kale', 'Cheese', 'Eggplant'];

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
 //   props.list = ['Kale', 'Cheese', 'Eggplant'];

  }
  render () {
   return (
    <li>{this.props.item}</li>
   );
  }
};

var GroceryList = (props) => (
  <ul>
    {props.list.map(item =>
    <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList list={['Kale', 'Cheese', 'Eggplant']}/>, document.getElementById('app'));

