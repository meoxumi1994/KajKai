import React from 'react'

class RowDropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        const { item } = this.props
        if(item == 'hr')
            return <hr style={{ margin: 5 }}/>
        return(
            <div
                onMouseOver={() => this.setState({ hover: true})}
                onMouseLeave={() => this.setState({ hover: false })}
                style={{
                    borderTop: this.state.hover?'1px solid #282828':'1px solid white',
                    borderBottom: this.state.hover?'1px solid #282828':'1px solid white',
                    backgroundColor: this.state.hover?'#3B5998':'white',
                    color: this.state.hover?'white':'black',
                    padding: '5px 10px 5px 10px',
                }}>
                {item}
            </div>
        )
    }
}

class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hover: {},
            width: 0,
        }
    }
    render(){
        const { width, contents, onClick } = this.props
        return(
            <div style={{
                borderRadius: 2.5,
                border: '1px solid #B2B2B2',
                boxShadow: '0px 0px 4px #B2B2B2',
                padding: '5px 0px 5px 0px',
                backgroundColor: 'white',
                position: 'absolute',
                zIndex: 100,
                width: width,
                marginLeft: -width + 16,
                marginTop: 9,
                fontSize: 12.5,
            }}>
                {contents.map((item,index) =>
                    <div key={index} onClick={() => onClick(index)}>
                        <RowDropDown key={index} item={item}/>
                    </div>
                )}
                <img style={{
                        position: 'absolute',
                        right: 0,
                        top: -6.8,
                    }}
                    width={18}
                    height={9}
                    src="/images/arrowupdropdown.svg"
                />
            </div>
        )
    }
}

export default DropDown
