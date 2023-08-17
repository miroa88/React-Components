// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react';
// import PaginationComponent from './PaginationComponent';
// import './App.css';
// import CardSlider from './CardSlider';
// // import Table from './Table';
// import Layout from './Layout';
// import AutocompleteTextField from './AutocompleteTextField'; 
// import DatePicker from './DatePicker';
// import { Table } from 'antd';
// import LoginForm from './LoginForm';

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PokemonAbilities from './PokemonAbilities';


function App() {

  // const auth = firebase.auth();

// function signIn(email, password) {
//   auth.signInWithEmailAndPassword(email, password).catch((error) => {
//     console.error("Error signing in", error);
//   });
// }
// function signUp(email, password) {
//   auth.createUserWithEmailAndPassword(email, password).catch((error) => {
//     console.error("Error signing up", error);
//   });
// }
  // const initialInputValue = 'Initial Value';
  // const inputValue = 'Current Value';
  // const suggestionArray = ['Apple', 'Ap1ple','App2le','Appl2e','Appl3e','App5le','Apple6','Apple7','Banana', 'Cherry', 'Grapes', 'Orange'];

  // //setInputValueOnChange,

  // const [selectedValue, setSelectedValue] = useState('');


  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '2',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '3',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '4',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '5',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '6',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '7',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '8',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '9',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '10',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '11',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '12',
  //     name: 'John Doe',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  // ];
  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (text, record) => (
  //       <span>
  //         {/* Add a clickable element inside the cell */}
  //         <a onClick={() => handleRowClick(record)}>Click Me</a>
  //       </span>
  //     ),
  //     onRow: (record) => ({
  //       onClick: () => handleRowClick(record), // Attach the onClick event handler
  //     }),
  //   },
  // ];

  // const handleRowClick = (record) => {
  //   console.log('Clicked row:', record);
  //   // Perform any action you want with the clicked row's data
  // };
  

  return (
    // <LoginForm signIn={signIn}  signUp={signUp}/>

//     <Table
//     dataSource={dataSource}
//     columns={columns}
//     pagination={{
//       position: ['bottomCenter'],
//       className: "pagination-container"//'custom-pagination', // Apply the custom class
//     }}
//   />
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/"  component={<Table />} />
//           <Route path="/pagination" component={<PaginationComponent />} />
//           <Route path="/cardSlider" component={<CardSlider />} />
//         </Routes>
//       </Layout>
//     </Router>
//     <Router>
//     <Layout>
//       <Routes>
//         <Route exact path="/table" element={<Table/>}/>
//         <Route exact path="/pagination" element={<PaginationComponent/>}/>
//         <Route exact path="/cardSlider" element={<CardSlider/>}/>
//         <Route exact path="/pieChart" element={<PieChart />}/>
//         {/* <Route path="*" element={<NotFound/>}/> */}
//       </Routes>
//     </Layout>
//   </Router>
//   <div>
//   <h1>Autocomplete Text Field {selectedValue}</h1>
//   <AutocompleteTextField
//     initialValue={initialInputValue}
//     value={inputValue}
//     options={suggestionArray}
//     // setInputValueOnSelect={setSelectedValue}
//     setInputValueOnChange={setSelectedValue}
//     placeholder={"placeholder"}
//     style={{ width: 200 }}
//   />
// </div>
  <Provider store={store}>
    {/* <DatePicker /> */}
    <PokemonAbilities pokemonId={1} />
  </Provider>


  );
}

export default App;


// import { PlusOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Slider,
//   Switch,
//   TreeSelect,
//   Upload,
// } from 'antd';

// const { RangePicker } = DatePicker;
// const { TextArea } = Input;

// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

// const FormDisabledDemo = () => {
//   const [componentDisabled, setComponentDisabled] = useState(true);

//   return (
//     <>
//       <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}
//       >
//         Form disabled
//       </Checkbox>
//       <Form
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 14 }}
//         layout="horizontal"
//         disabled={componentDisabled}
//         style={{ maxWidth: 600 }}
//       >
//         <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
//           <Checkbox>Checkbox</Checkbox>
//         </Form.Item>
//         <Form.Item label="Radio">
//           <Radio.Group>
//             <Radio value="apple"> Apple </Radio>
//             <Radio value="pear"> Pear </Radio>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item label="Input">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Select">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="TreeSelect">
//           <TreeSelect
//             treeData={[
//               { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="Cascader">
//           <Cascader
//             options={[
//               {
//                 value: 'zhejiang',
//                 label: 'Zhejiang',
//                 children: [
//                   {
//                     value: 'hangzhou',
//                     label: 'Hangzhou',
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           <RangePicker />
//         </Form.Item>
//         <Form.Item label="InputNumber">
//           <InputNumber />
//         </Form.Item>
//         <Form.Item label="TextArea">
//           <TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Switch" valuePropName="checked">
//           <Switch />
//         </Form.Item>
//         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
//           <Upload action="/upload.do" listType="picture-card">
//             <div>
//               <PlusOutlined />
//               <div style={{ marginTop: 8 }}>Upload</div>
//             </div>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//         <Form.Item label="Slider">
//           <Slider />
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default () => <FormDisabledDemo />;