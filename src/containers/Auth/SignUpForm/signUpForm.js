import React, {useEffect, useRef} from 'react';
import classes from "./signUpForm.module.css"

const SignUpForm = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        if(props.show){
            document.body.style.overflow = 'hidden';
          }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [props.show]);

    const modalClose = () => {
        props.handleClose();
    }
    
    return <div className={classes.section} style={{
        transform:props.show ? 'translateY(0)': 'translateY(-100vh)',
        opacity:props.show ? 1 : 0,
    }} ref={ref} onClick={() => modalClose()}>
        <div className={classes.inner} onClick={e => e.stopPropagation()}>{props.children}</div></div>
}
export default SignUpForm