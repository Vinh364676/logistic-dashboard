import React from 'react'
import TitleComponent from '../../../../global/Custom/TitleComponent/TitleComponent'
import BannerScreen from '../../../../screen/Home/Banner/BannerScreen'
import { useTranslation } from 'react-i18next'

function BannerEdit() {
  const {t} = useTranslation()

  return (
    <div>
        <TitleComponent title={t('edit')} isExist={false} />
        <BannerScreen/>
    </div>
  )
}

export default BannerEdit
