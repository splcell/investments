import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';
import { RouterDecorator } from 'helpers/decorators/RouteDecrator';
import { StoreDecorator } from 'helpers/decorators/StoreDecorator';
import { ContentBox } from 'components/ContentBox';
import { Text } from 'components/Text';
import styles from './Description.module.scss'



const meta = {
  title: 'Profile/Description',
  component: Description,
  parameters: {
    
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
  decorators: [RouterDecorator, StoreDecorator]
  
  
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

const descriptionMock = "Pfizer Inc. discovers, develops, manufactures, markets, distributes, and sells biopharmaceutical products worldwide. It offers medicines and vaccines in various therapeutic areas, including cardiovascular metabolic and women's health under the Premarin family and Eliquis brands; biologics, small molecules, immunotherapies, and biosimilars under the Ibrance, Xtandi, Sutent, Inlyta, Retacrit, Lorbrena, and Braftovi brands; and sterile injectable and anti-infective medicines, and oral COVID-19 treatment under the Sulperazon, Medrol, Zavicefta, Zithromax, Vfend, Panzyga, and Paxlovid brands. The company also provides medicines and vaccines in various therapeutic areas, such as pneumococcal disease, meningococcal disease, tick-borne encephalitis, and COVID-19 under the Comirnaty/BNT162b2, Nimenrix, FSME/IMMUN-TicoVac, Trumenba, and the Prevnar family brands; biosimilars for chronic immune and inflammatory diseases under the Xeljanz, Enbrel, Inflectra, Eucrisa/Staquis, and Cibinqo brands; and amyloidosis, hemophilia, and endocrine diseases under the Vyndaqel/Vyndamax, BeneFIX, and Genotropin brands. In addition, the company is involved in the contract manufacturing business. It serves wholesalers, retailers, hospitals, clinics, government agencies, pharmacies, and individual provider offices, as well as disease control and prevention centers. The company has collaboration agreements with Bristol-Myers Squibb Company; Astellas Pharma US, Inc.; Myovant Sciences Ltd.; Akcea Therapeutics, Inc; Merck KGaA; Valneva SE; BioNTech SE; and Arvinas, Inc. Pfizer Inc. was founded in 1849 and is headquartered in New York, New York."

//

export const DescriptionStory = () => {
  const description = descriptionMock;
  

  return (
      <ContentBox>
        <Text title="Description" align="center" />
        <Text text={description} className={styles.description} />
      </ContentBox>
  );
};

