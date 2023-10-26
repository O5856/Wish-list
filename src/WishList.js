import { Component } from "react";

export class WishList extends Component{
    state = {
        userInput: "",
        wishlist: []
    }

    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addWish(input) {
        if (input === '') {
            alert('Please add an item')
        } else {
        let listArray = this.state.wishlist;
        listArray.push(input);
        this.setState({ wishlist: listArray, userInput: '' })

    }
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem(){
        let listArray = this.state.wishlist;
        this.setState({ wishlist: []})
        
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <form className="formStyle" onSubmit={this.onFormSubmit}>
                <div>
                <input type="text"
                    placeholder="Add a wish."
                    onChange={(e) => { this.onChangeEvent(e.target.value) }}
                        value={this.state.userInput} />
                </div>
                <div>
                    <ul>
                        {this.state.wishlist.map((item, index) =>
                            (<li className="" onClick={this.crossedWord} key={index}>{item}</li>))}
                    </ul>
                </div>
                    <div className="btnOne">
                    <button className="btn btnColorOne" onClick={()=>{this.addWish(this.state.userInput)}}>ADD</button>
                </div>
                    <div className="btnTwo">
                        <button className="btn btnColorTwo" onClick={()=>this.deleteItem()}>Empty list</button>
                    </div>
                </form>
</div>
        )
    }
}