import React from 'react'

import { Modal } from 'react-bootstrap'
import ShowInMap from '~/containers/entity/map/ShowInMap'

class Cell extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { name, onClick, style } = this.props
        return(
            <li style={{
                borderTop: this.state.hover?'1px solid #282828':'1px solid transparent',
                borderBottom: this.state.hover?'1px solid #282828':'1px solid transparent',
                backgroundColor: this.state.hover?'#3B5998':'transparent' }} >
                <div className="btn"
                    style={{ width: '100%', padding: '0px 10px 0px 10px', display: 'inline-block', textAlign: 'left' }}
                    onClick={() => onClick()}
                    onMouseOver={() => this.setState({ hover: true })}
                    onMouseLeave={() => this.setState({ hover: false })}>
                    <div style={{
                        color: this.state.hover?'white':'black',
                        ...style
                    }}>
                        {name}
                    </div>
                </div>
            </li>
        )
    }
}

class CreateInterest extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { CREATE_INTEREST, CLOSE, DONE, onChange, showModal, position, categories,
            firstCategory, secondCategory, onCreateInterest } = this.props
        return(
            <div>
                <div style={{ paddingBottom: 10 }}>
                    <div className="btn"
                        onClick={() => onChange('showModal', true)}
                        style={{
                            textAlign: 'left',
                            display: 'inline-block',
                            margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                        <a style={{ fontSize: 13 }}>{CREATE_INTEREST}</a>
                    </div>
                </div>
                <Modal show={showModal} onHide={() => onChange('showModal', false )}>
                    <div style={{ padding: 10, fontSize: 14, fontWeight: 600 }}>
                        {CREATE_INTEREST}
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10 }}>
                        choose your interest
                    </div>
                    {/* <div style={{ padding: 10 }}>
                        <div className="btn btn-default btn-xs" style={{ marginTop: 5, width: 300 , fontSize: 12.5 }}
                            onClick={() => {
                                setTimeout(() => {
                                    onChange('showDropDown', true)
                                },1)
                            }}>
                            {chooseCategory || 'choose your categories'}
                        </div>
                    </div> */}
                    <div className="input-group" style={{ marginLeft: 10 }}>
                      <div className="input-group-btn">
                        <div className="btn btn-default btn-sm dropdown-toggle"
                            style={{ borderRadius: '2px 0px 0px 2px', borderWidth: 1, backgroundColor: '#F6F7F9'}}
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {firstCategory ? firstCategory.name : 'Choose Your Original Category'}{" "}
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu">
                            {categories.map((item) =>
                                <div key={item.id}>
                                    <Cell {...item} onClick={() => {
                                        onChange('firstCategory', item )
                                        onChange('secondCategory', undefined )
                                    }}/>
                                </div>
                            )}
                        </ul>
                      </div>
                    </div>
                    {firstCategory && <div className="input-group" style={{ marginLeft: 10, marginTop: 10 }}>
                      <div className="input-group-btn">
                        <div className="btn btn-default btn-sm dropdown-toggle"
                            style={{ borderRadius: '2px 0px 0px 2px', borderWidth: 1, backgroundColor: '#F6F7F9'}}
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {secondCategory ? secondCategory.name : 'Choose Your Detail Category'}{" "}
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu">
                            {firstCategory.secondCategories.map((item) =>
                                <div key={item.id}>
                                    <Cell {...item} onClick={() => onChange('secondCategory', item )}/>
                                </div>
                            )}
                        </ul>
                      </div>
                    </div>}
                    <div style={{ padding: 10 }}>
                        choose your location
                    </div>
                    <div style={{ padding: '0px 10px 10px 10px' }}>
                        <ShowInMap position={position} width={576} height={200}
                            onChangePosition={(value) => {
                                onChange('position',value)
                            }}
                            canEdit={true}/>
                    </div>
                    <hr style={{ margin: 0 }}/>
                    <div style={{ padding: 10, height: 50 }}>
                        <div className="btn btn-default btn-sm" style={{ float: 'right'}}
                            onClick={() => onChange('showModal', false)}>
                            {CLOSE}
                        </div>
                        <div className="btn btn-default btn-sm" style={{
                            float: 'right', color: 'white', borderWidth: 0,
                            backgroundColor: '#BD081C', marginRight: 10, }}
                            disabled={!(secondCategory && position && position.lat)}
                            onClick={() => {
                                if(secondCategory && position && position.lat)
                                    onCreateInterest()
                            }}>
                            {DONE}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default CreateInterest