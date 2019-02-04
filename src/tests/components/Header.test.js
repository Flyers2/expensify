
import Header from '../../components/Header'
import React from 'react'
import {shallow} from 'enzyme'

//import ReactShallowRenderer from 'react-test-renderer/shallow'

//old reacht shallow rendererer
// test('should render Header component',()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header/>);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('should render Header correctly via enzyme',()=>{
    const wrapper = shallow(<Header/>); 
    expect( wrapper).toMatchSnapshot();
  //  expect(wrapper.find('h1').text()).toBe("Expensify")
});