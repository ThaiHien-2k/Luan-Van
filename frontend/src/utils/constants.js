import React from 'react';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
export const LinkItems = [
  { name: 'Dashboard', url: '/', icon: <DashboardIcon /> },
  { name: 'Quản lý tài khoản', url: '/accounts', icon: <PersonIcon /> },
  { name: 'Quản lý nhân viên', url: '/staffs', icon: <PeopleIcon /> },
  { name: 'Quản lý thu chi', url: '/cashFlows', icon: <AttachMoneyIcon /> },
  { name: 'Quản lý lượng máu', url: '/bloodStorages', icon: <BloodtypeIcon /> },
  { name: 'Quản lý buổi hiến máu', url: '/bloodDonates', icon: <VolunteerActivismIcon /> },
  { name: 'Thông tin người hiến', url: '/infors', icon: <AssignmentIcon /> },

  
];



export const domain = process.env.REACT_APP_BACKEND_HOST;
export const auth_url = `${domain}api/admin/auth`;
export const login_url = `${domain}api/admin/login`;
export const register_url = `${domain}api/admin/register`;
export const logout_url = `${domain}api/admin/logout`;
export const admins_url = `${domain}api/admin/users/`;


export const staffs_url = `${domain}api/staffs/`;
export const create_new_staff = `${domain}api/admin/staff/new`;
export const update_staff_url = `${domain}api/admin/staff/`;

export const bloodDonates_url = `${domain}api/bloodDonates/`;
export const bloodDonates_remaining = `${domain}api/bloodDonates/bloodDonateRemaining`;
export const create_new_bloodDonate = `${domain}api/admin/bloodDonate/new`;
export const update_bloodDonate_url = `${domain}api/admin/bloodDonate/`;

export const cashFlows_url = `${domain}api/cashFlows/`;
export const cashFlow_remaining = `${domain}api/cashFlows/totalRemaining`;
export const create_new_cashFlow = `${domain}api/admin/cashFlow/new`;
export const update_cashFlow_url = `${domain}api/admin/cashFlow/`;

export const bloodStorages_url = `${domain}api/bloodStorages/`;
export const bloodStorage_remaining = `${domain}api/bloodStorages/bloodRemaining`;
export const create_new_bloodStorage = `${domain}api/admin/bloodStorage/new`;
export const update_bloodStorage_url = `${domain}api/admin/bloodStorage/`;



export const infors_url = `${domain}api/infors/`;
export const create_new_infor = `${domain}api/admin/infor/new`;
export const update_infor_url = `${domain}api/admin/infor/`;