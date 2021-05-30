import React from 'react'

import './admin-panel.styles.scss'

import GalleryUpload from '../gallery-upload/gallery-upload.component'
import GalleryDelete from '../gallery-delete/gallery-delete.component'

const AdminPanel = () => (
    <div className="admin-panel">
        <GalleryUpload/>
        <GalleryDelete />
    </div>
)


export default AdminPanel
