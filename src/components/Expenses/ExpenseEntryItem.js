import React from 'react';
import './ExpenseEntryItem.css';

class ExpenseEntryItem extends React.Component{

    constructor(props){
        super(props);
        
    }
    // itemStyle={
    //     color:'red',
    //     fontSize: 'medium',
    //     textalign: 'justify'
    // }
render(){
    return(
           <div style={
{
        color:'red',
        fontSize: 'medium',
        textalign: 'justify'
}

           }>
            <div><b>Item:</b><em>{this.props.name}</em></div>
            <div><b>Amount:</b><em>{this.props.amount}</em></div>
            <div><b>Spend Date:</b><em>{this.props.spendDate.toString()}</em></div>
            <div><b>Category:</b><em>{this.props.category}</em></div>
           </div>
    );
}

}

export default ExpenseEntryItem;