/*eslint-disable*/
import React, { useState, useEffect } from 'react';
// @material-ui/core components
import Button from '@material-ui/core/Button';
import Notification from 'components/Snackbar/Notification.js';
import Paper from '@material-ui/core/Paper';
import CustomTable from '../../../components/Table/Table';
import ConfirmationModal from '../../../components/Modal/confirmationModal';
import axios from 'axios';
import { getStaffUrl, deleteStaffUrl } from '../../../public/endpoins';
import Loader from 'react-loader-spinner';

const tableHeading = [
  'First Name',
  'Last Name',
  'Designation',
  'Contact No',
  'ID No',
  'Email',
  'gender',
  'Address',
  "Actions"
];
const tableDataKeys = [
  'firstName',
  'lastName',
  'designation',
  'contactNumber',
  'identificationNumber',
  'email',
  'gender',
  'address'
];

const actions = { edit: true, delete: true };

export default function Staff(props) {
  const [staff, setStaff] = useState('');
  const [deleteItem, setdeleteItem] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openNotification, setOpenNotification] = useState(false);

  const [systemAdminArray, setSystemAdminArray] = useState('');

  const [staffTypeArray, setStaffTypesArray] = useState('');

  if (openNotification) {
    setTimeout(() => {
      setOpenNotification(false);
      setErrorMsg('');
    }, 2000);
  }

  function getStaffTypes() {
    axios
      .get(getStaffUrl)
      .then(res => {
        if (res.data.success) {
          console.log(res.data.data);
          setStaff(res.data.data.staff);
          setSystemAdminArray(res.data.data.systemAdmin);
          setStaffTypesArray(res.data.data.staffType);
        } else if (!res.data.success) {
          setErrorMsg(res.data.error);
          setOpenNotification(true);
        }
        return res;
      })
      .catch(e => {
        console.log('error: ', e);
      });
  }

  useEffect(() => {
    getStaffTypes();
  }, []);

  const addNewItem = () => {
    let path = `staff/next/add`;
    props.history.push({
      pathname: path,
      state: { comingFor: 'add', systemAdminArray, staffTypeArray }
    });
  };

  function handleEdit(rec) {
    let path = `staff/next/edit`;
    props.history.push({
      pathname: path,
      state: {
        comingFor: 'edit',
        selectedItem: rec,
        systemAdminArray,
        staffTypeArray
      }
    });
  }

  function handleDelete(id) {
    setModalVisible(true);
    setdeleteItem(id);
  }

  function deleteVendor() {
    const params = {
      _id: deleteItem
    };

    axios
      .delete(deleteStaffUrl + '/' + params._id)
      .then(res => {
        if (res.data.success) {
          setdeleteItem('');
          setModalVisible(false);
          window.location.reload(false);
        } else if (!res.data.success) {
          setErrorMsg(res.data.error);
          setOpenNotification(true);
        }
        return res;
      })
      .catch(e => {
        console.log('error while deletion ', e);
      });
  }

  return (
    <div>
      {staff ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={addNewItem}
                style={{ width: 65, height: 65, borderRadius: 65 / 2 }}
                variant="contained"
                color="primary"
              >
                <i className="zmdi zmdi-plus zmdi-hc-3x"></i>
              </Button>
            </div>
          </div>

          <div>
            <CustomTable
              tableData={staff}
              tableDataKeys={tableDataKeys}
              tableHeading={tableHeading}
              action={actions}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>

          <ConfirmationModal
            modalVisible={modalVisible}
            msg="Are you sure want to delete the record?"
            hideconfirmationModal={() => setModalVisible(false)}
            onConfirmDelete={() => deleteVendor()}
            setdeleteItem={() => setdeleteItem('')}
          />

          <Notification msg={errorMsg} open={openNotification} />
        </div>
      ) : (
        <div
          style={{
            width: '70%',
            height: '100%',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Loader type="TailSpin" color="red" height={50} width={50} />
        </div>
      )}
    </div>
  );
}
