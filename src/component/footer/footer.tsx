import './footer.css'
import {Component} from 'react'
import {connect} from 'react-redux'
import getFooter from '../../API/footerapi'
import {StateType} from '../../redux/store'
import {FooterPropsInterface} from '../../typescript/interfaces'
class Footer extends Component<FooterPropsInterface>{
    componentDidMount(){
        this.props.getFooter()
    }
    render(){
        return(
            <div className="footer">
                <div className="about">
                    <h3>About</h3>
                    <ul>
                        {this.props.items1.map((value)=><li>{value}</li>)}
                    </ul>
                </div>
                <div className="support">
                    <h3> Support</h3>
                    <ul>
                        {this.props.items2.map((item)=><li>{item}</li>)}
                        
                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state:StateType){
    return{ 
        items1:state.FooterReducer.items1,
        items2:state.FooterReducer.items2
    }
}
function mapDispatchToState(dispatch:any){
    return{
       getFooter: ()=>dispatch(getFooter())
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Footer);