import React from 'react'
import styles from './CategoriesCard.module.css'

export default function CategoriesCard({ id, image, title }) {

  return (
    <div className={styles.categoryCard}>
      <img className={styles.image} src={`http://localhost:3333${image}`} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  )

}
