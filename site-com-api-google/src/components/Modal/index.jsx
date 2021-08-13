import React from "react";
import PortalModal from "./Portal/index";
import theme from "../../theme";
import { ThemeProvider } from 'styled-components';
import { Dialog, Overlay } from "./style";

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
      }
      escFunction(event){
        if(this.props.open){
            if(event.keyCode === 27) {
                this.props.onClose();
              }
        } 
      }
    componentDidMount(){
        window.addEventListener("keydown", this.escFunction);
      }
      componentWillUnmount(){
        window.removeEventListener("keydown",this.escFunction);
      }
    render() {
        
        if(!this.props.open) return null;
        var onClose = this.props.onClose;
        
        function onOverlayClick(){
            onClose();
        }
        function onDialog(e){
            e.stopPropagation();
        }
        const colorScheme = matchMedia('(prefers-color-scheme: dark)');
        colorScheme.onchange = (e) => this.setState({});
        return (
            
            <ThemeProvider theme={theme(colorScheme.matches ? { dark: true } : { dark: false })}>
                <PortalModal>
                    <Overlay onClick={onOverlayClick}>
                        <Dialog onClick={onDialog}>
                            {this.props.children}
                        </Dialog>
                    </Overlay>
                </PortalModal >
            </ThemeProvider>
        )
    }

}

export default Modal;