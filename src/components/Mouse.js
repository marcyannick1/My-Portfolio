import React, { Component } from "react";
import "../styles/Mouse.scss";

class Mouse extends Component {
    state = {
        top: 0,
        left: 0,
    };
    componentDidMount() {
        const circle = document.querySelector(".circle");
        circle.style.width = "40px"
        circle.style.height = "40px"
        document.addEventListener("mousemove", this.position);
        document.addEventListener("mouseenter", this.visible);
        document.addEventListener("mouseleave", this.hidden);
        document.addEventListener("mousedown", this.mouseDown);
        document.addEventListener("mouseup", this.mouseUp);
    }
    componentDidUpdate(){
        this.size();
    }

    position = (e) => {
        const circle = document.querySelector(".circle");
        const dot = document.querySelector('.dot')
        this.setState({ top: e.clientY, left: e.clientX });
        circle.style.top = this.state.top + "px";
        circle.style.left = this.state.left + "px";
        dot.style.top = this.state.top + "px";
        dot.style.left = this.state.left + "px";
    };
    visible = () => {
        const circle = document.querySelector(".circle");
        const dot = document.querySelector('.dot')
        circle.style.visibility = "visible";
        dot.style.visibility = "visible";
    };
    hidden = () => {
        const circle = document.querySelector(".circle");
        const dot = document.querySelector('.dot')
        circle.style.visibility = "hidden";
        dot.style.visibility = "hidden";
    };
    size = ()=>{
        const circle = document.querySelector(".circle");
        const targets = document.querySelectorAll('.mouseover')
        targets.forEach(target => {
            target.addEventListener('mouseenter',()=>{
                circle.style.width = "70px";
                circle.style.height = "70px";
                circle.style.border = "3px solid #2ebeab";
                
            })
            target.addEventListener('mouseleave',()=>{
                circle.style.width = "40px";
                circle.style.height = "40px";
                circle.style.border = "3px solid #0edabf";
            })
        });
    }
    mouseDown = ()=>{
        const circle = document.querySelector(".circle")
        circle.style.width = +circle.style.width.split('px')[0] - 5 + "px";
        circle.style.height = +circle.style.height.split('px')[0] - 5 + "px";
    }
    mouseUp = ()=>{
        const circle = document.querySelector(".circle")
        circle.style.width = +circle.style.width.split('px')[0] + 5 + "px";
        circle.style.height = +circle.style.height.split('px')[0] + 5 + "px";
    }

    render() {
        return (
            <div className="cursor">
                <div className="circle"></div>
                <div className="dot"></div>
            </div>
        );
    }
}

export default Mouse;