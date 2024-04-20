import icons from '../../assets/icons.svg';
import { Details, Header, VehicleInfo, VehicleItem } from './Features.styled';
import {
  DetailsList,
  DetailsItem,
  SvgDetail,
  NameCapitalize,
} from 'components/CamperCard/CamperCard.styled';

const Features = ({ data }) => {
  const formatDetails = data => data.replace(/(\d)([^\d])$/, '$1 $2');

  return (
    <Details>
      <DetailsList>
        <DetailsItem>
          <svg width="20" height="20">
            <use href={icons + '#icon-adults'}></use>
          </svg>
          <span>{data.adults} adults</span>
        </DetailsItem>
        <DetailsItem>
          <SvgDetail width="20" height="20">
            <use href={icons + '#icon-automatic'}></use>
          </SvgDetail>
          <NameCapitalize>{data.transmission}</NameCapitalize>
        </DetailsItem>
        <DetailsItem>
          <svg width="20" height="20">
            <use href={icons + '#icon-ac'}></use>
          </svg>
          <span>{data.details.airConditioner && 'AC'}</span>
        </DetailsItem>
        <DetailsItem>
          <svg width="20" height="20">
            <use href={icons + '#icon-petrol'}></use>
          </svg>
          <NameCapitalize>{data.engine}</NameCapitalize>
        </DetailsItem>
        {data.details.kitchen !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-kitchen'}></use>
            </SvgDetail>
            <span>Kitchen</span>
          </DetailsItem>
        )}
        <DetailsItem>
          <SvgDetail width="20" height="20">
            <use href={icons + '#icon-bed'}></use>
          </SvgDetail>
          <span>{data.details.beds} beds</span>
        </DetailsItem>
        <DetailsItem>
          <SvgDetail width="20" height="20">
            <use href={icons + '#icon-conditioner'}></use>
          </SvgDetail>
          <span>{data.details.airConditioner} air conditioner</span>
        </DetailsItem>
        {data.details.CD !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-cd'}></use>
            </SvgDetail>
            <span>CD</span>
          </DetailsItem>
        )}
        {data.details.radio !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-radio'}></use>
            </SvgDetail>
            <span>Radio</span>
          </DetailsItem>
        )}
        {data.details.hob !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-hob'}></use>
            </SvgDetail>
            <span>{data.details.hob} hob</span>
          </DetailsItem>
        )}
        {data.details.shower !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-shower'}></use>
            </SvgDetail>
            <span>Shower</span>
          </DetailsItem>
        )}
        {data.details.toilet !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-toilet'}></use>
            </SvgDetail>
            <span>Toilet</span>
          </DetailsItem>
        )}
        {data.details.freezer !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-freezer'}></use>
            </SvgDetail>
            <span>Freezer</span>
          </DetailsItem>
        )}
        {data.details.microwave !== 0 && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-microwave'}></use>
            </SvgDetail>
            <span>Microwave</span>
          </DetailsItem>
        )}
        {data.details.gas !== '' && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-gas'}></use>
            </SvgDetail>
            <span>{data.details.gas}</span>
          </DetailsItem>
        )}
        {data.details.water !== '' && (
          <DetailsItem>
            <SvgDetail width="20" height="20">
              <use href={icons + '#icon-water'}></use>
            </SvgDetail>
            <span>{data.details.water}</span>
          </DetailsItem>
        )}
      </DetailsList>
      <div>
        <Header>Vehicle details</Header>
        <VehicleInfo>
          <VehicleItem>
            <span>Form</span>
            <NameCapitalize>{data.form}</NameCapitalize>
          </VehicleItem>
          <VehicleItem>
            <span>Length</span>
            <span>{formatDetails(data.length)}</span>
          </VehicleItem>
          <VehicleItem>
            <span>Width</span>
            <span>{formatDetails(data.width)}</span>
          </VehicleItem>
          <VehicleItem>
            <span>Height</span>
            <span>{formatDetails(data.height)}</span>
          </VehicleItem>
          <VehicleItem>
            <span>Tank</span>
            <span>{formatDetails(data.tank)}</span>
          </VehicleItem>
          <VehicleItem>
            <span>Consumption</span>
            <span>{data.consumption}</span>
          </VehicleItem>
        </VehicleInfo>
      </div>
    </Details>
  );
};

export default Features;
