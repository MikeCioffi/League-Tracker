import "./Button.css";

const Button = () => {

    return <div className="search">
    <TextField
    id="outlined-basic"
    onChange={e => this.setSearch(e.target.value)}
    variant="outlined"
    fullWidth
    label="Username"
  />
</div>

}

export default button