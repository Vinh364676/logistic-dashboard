import React from 'react'
import TitleComponent from '../../../../global/Custom/TitleComponent/TitleComponent'

import { useTranslation } from 'react-i18next'
import SolutionScreen from '../../../../screen/Home/Solution/SolutionScreen'

function SolutionEdit() {
  const {t} = useTranslation()

  return (
    <div>
        <TitleComponent title={t('edit')} isExist={false} />
        <SolutionScreen/>
    </div>
  )
}

export default SolutionEdit
