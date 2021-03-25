function Login2(){
  return(
    <div>
    <Segment inverted>
      <Input inverted placeholder='Search...' />
      <Button onClick ={ (e) => {
        alert(e.target.value)
      } }> 로그인 </Button>

    </Segment>
    </div>
  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "로그인 완료"}
  }

  render(){
    return(
    <div>
      <Input onChange = { (e) => this.setState({ id: e.target.value })}/>
      <Button onClick ={ (event) => {
        alert(this.state.id)
      } }> Login </Button>
    </div>
    )
  }
}
