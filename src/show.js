import React,{component} from React;
class show extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1> tempreture at {this.props.quries} is:</h1>
                <h1>{this.props.temp}</h1>
            </div>
        );
    }

}
export default show;