import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Sticky } from './components/Sticky.js';
// import {Search} from 'react-icons/lib/fa/search';
import {FaSearch} from 'react-icons/lib/fa'
import './App.css';
import 'react-tabs/style/react-tabs.css';

import axios from 'axios';



//import JSON DATA to autopopulate the form!!!!
const data= {};

class App extends Component {
  constructor(props){
    super(props)
    this.state= this.props;
  }





  componentDidMount (){
    // Fetching the Axios Data!???
    //add icon between the buttons
  }


 static defaultProps = {
       width:600,
       height:300,
       data: data,
  };


  render() {
    return (

    <div className="form_container">
      <Sticky className="sticky-one" exit="300">
        <div id="navbar">
          <div id="navHead">IT Application Catalog - UFED
            <input type="text" className="round" id="searchTerm" placeholder="Search" style={{marginLeft:550+'px'}}/>
          <button>
              <FaSearch />
          </button>
          </div>
        </div>
      </Sticky>

      <form>
        <div className="sides">
          <div className="left sides">
            <div className="form_element sides">
              <div className="label_part">
                <label>Acronym</label>
              </div>
              <div className="input_part" id="form_element1">
                <input type="text" name="acronym"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Category</label>
              </div>
              <div className="input_part" id="form_element2">
                <input type="text" name="category"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Company</label>
              </div>
              <div className="input_part" id="form_element3">
                <input type="text" name="company"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Ecosystem</label>
              </div>
              <div className="input_part" id="form_element4">
                <input type="text" name="ecosystem"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Criticality</label>
              </div>
              <div className="input_part" id="form_element5">
                <input type="text" name="criticality"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Application Url</label>
              </div>
              <div className="input_part" id="form_element6">

              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Customer Facing</label>
              </div>
              <div className="input_part" id="form_element7">
                <input type="text" name="facing"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>PCI</label>
              </div>
              <div className="input_part" id="form_element8">
                <input type="checkbox" name="pci"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>PCI Category</label>
              </div>
              <div className="input_part" id="form_element9">
                <input type="text" name="pci_cat"/>
              </div>
            </div>
          </div>
          <div className="right sides">
            <div className="form_element sides">
              <div className="label_part">
                <label>Technical Owner(s)</label>
              </div>
              <div className="input_part" id="form_element10">

              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Business Groups</label>
              </div>
              <div className="input_part" id="form_element11">
                <input type="text" name="business_groups"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Business Owner(s)</label>
              </div>
              <div className="input_part" id="form_element12">

              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>End Users</label>
              </div>
              <div className="input_part" id="form_element13">
                 <textarea name="end_users"></textarea>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>ReviewBy Date</label>
              </div>
              <div className="input_part" id="form_element14">
                 <input type="text" name="review_date"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>ESSO Enabled</label>
              </div>
              <div className="input_part" id="form_element15">
                <input type="checkbox" name="esso"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Strategic</label>
              </div>
              <div className="input_part" id="form_element16">
                <input type="checkbox" name="strategic"/>
              </div>
            </div>
            <div className="form_element sides">
              <div className="label_part">
                <label>Vendor</label>
              </div>
              <div className="input_part" id="form_element17">
                 <input type="text" name="vendor"/>
              </div>
            </div>

          </div>
        </div>
        <div className="form_element sides wide_element">
          <div className="label_part">
            <label>Description</label>
          </div>
          <div className="input_part" id="form_element18">
            <textarea name="description_wide"></textarea>
          </div>
        </div>
        <div className="form_element sides wide_element">
          <div className="label_part">
            <label>Comments</label>
          </div>
          <div className="input_part" id="form_element19">
            <textarea name="comments_wide"></textarea>
          </div>
        </div>






        <div className="form_element sides wide_element">
          <input className="toggle-box" id="identifier-1" type="checkbox"/>
          <label htmlFor="identifier-1">Expand-1</label>
          <div >You can now collapse</div>
        </div>
        <div className="form_element sides wide_element">
          <input className="toggle-box" id="identifier-2" type="checkbox"/>
          <label htmlFor="identifier-2">Expand-2</label>
          <div>You can now collapse</div>
        </div>


      </form>



        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      <button className="button button4">Button</button>

    </div>




    );
  }
}

export default App;
