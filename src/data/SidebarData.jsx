import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/Dash1',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/CoursesPage',
        icon: <FaIcons.FaChalkboardTeacher />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/Dash',
        icon: <IoIcons.IoIosPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    }
]
