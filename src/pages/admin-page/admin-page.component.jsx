import React from 'react'
import { connect } from 'react-redux'

import './admin-page.styles.scss'

import LoginPage from '../login-page/login-page.component'
import AdminPanel from '../../components/admin-panel/admin-panel.component'


const AdminPage = ({ currentUser }) => (
    <div className="admin-page">
        <div className="container">
            
            {
                currentUser ?
                <AdminPanel />
                :
                <LoginPage />
            }

        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(AdminPage)