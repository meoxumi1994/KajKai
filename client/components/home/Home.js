import React from 'react';
import Status from './status/Status';
import Advertisement from './Advertisement';
import { DropdownButton,  MenuItem, Grid, Row, Col  } from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const { searchResult, ...searchQuery } = this.props.search
    const { searchResult: abcxyz, ...nextSearchQuery } = nextProps.search
    if (JSON.stringify(nextSearchQuery) != JSON.stringify(searchQuery)) {
      console.log('dnakldhash');
      this.props.onSearchQueryUpdated(nextSearchQuery)
    }
  }

  render() {
    const { searchType, searchResult } = this.props.search
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-0 col-md-2" style={{ padding: 0}}>
              </div>
              <div className="col-sm-6 col-md-5" style={{ padding: 0}}>
                  <div>
                    {searchType == 'CATEGORY' ?
                      <ul>
                        {searchResult.sellposts.map(sellpost =>
                          <div key={sellpost.sellpostId}>
                            <div>{sellpost.title}</div>
                            <img src={sellpost.avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                          </div>
                        )}
                      </ul>
                      : (
                        searchType == 'STORE' ?
                        <ul>
                          {searchResult.stores.map(store =>
                            <div key={store.storeId}>
                              <div>{store.storeName}</div>
                              <img src={store.avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                            </div>
                          )}
                        </ul>
                        : <ul>
                          {searchResult.users.map(user =>
                            <div key={user.userId}>
                              <div>{user.username}</div>
                              <img src={user.avatarUrl} alt="Cinque Terre" width="29" height="29"/>
                            </div>
                          )}
                        </ul>
                      )}
                  </div>
              </div>
              <div className="col-sm-3 col-md-2" style={{ padding: 0}}>

              </div>
          </div>
      </div>
    )
  }
}
