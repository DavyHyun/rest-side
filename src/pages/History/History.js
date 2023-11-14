import React from 'react'
import styles from './History.module.scss'
import Title from '../../components/History/TitleContainer/Title'
import Header from '../../components/History/Header/Header'
import ContentTitles from '../../components/History/ContentTitles/ContentTitles'
import OrdersContainer from '../../components/History/Orders/OrdersContainer/OrdersContainer'

function History() {
  const headerData = [
    { title: "Total Revenue", content: "$100000" },
    { title: "Total Customers", content: "500" },
    { title: "Placeholder 1", content: "Placeholder 1" },
    { title: "Placeholder 2", content: "Placeholder 2" },
  ]

  const contentTitlesData = ["Order #", "Name", "Transaction", "Details", "Date Created"];

  const ordersData = [
    [0, "Hanara", "$15.07", "", "05 Nov 2023"],
    [1, "Collin", "$12.58", "", "05 Nov 2023"],
    [2, "David", "$28.94", "", "06 Nov 2023"],
    [3, "John", "$32.49", "", "06 Nov 2023"]
  ]

  return (
    <div className={styles.container}>
      <Title title={"TRANSACTION HISTORY"} />

      <Header data={headerData} />
      <ContentTitles data={contentTitlesData} />
      <OrdersContainer data={ordersData} />
    </div>
  )
}

export default History 