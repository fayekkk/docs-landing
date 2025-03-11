
export default function MyButton(){
    const handleClick = () => {
        console.log("Button Clicked")
    }
    return (
        <button onClick={()=>{handleClick()}}>Click</button>
    )
}