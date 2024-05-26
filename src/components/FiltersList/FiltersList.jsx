import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons.svg';
import {
  Label,
  InputContainer,
  SvgMap,
  InputBlock,
  Paragraph,
  Header,
  FilterBlock,
  EquipmentList,
  EquipmentItem,
  EquipInput,
  Input,
  EquipBlock,
  StyledSpan,
  BtnSearch,
  VehicleBlock,
  BtnDelete,
  BtnBlock,
} from './FiltersList.styled';
import { SvgDetail } from 'components/CamperCard/CamperCard.styled';
import { selectItemsForFilter } from '../../redux/adverts/advertsSelectors';
import { useEffect, useState } from 'react';
import {
  resetFilteredCampers,
  setFilteredCampers,
} from '../../redux/adverts/advertsSlice';
import { getAllCampersThunk } from '../../redux/adverts/advertsThunks';

const FiltersList = () => {
  const campers = useSelector(selectItemsForFilter);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    location: '',
  });

  useEffect(() => {
    dispatch(getAllCampersThunk());
  }, [dispatch]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filtered = campers.filter(camper => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      return matchesLocation;
    });
    dispatch(setFilteredCampers(filtered));
  };

  const handleReset = () => {
    setFilters({ location: '' });
    dispatch(resetFilteredCampers());
  };

  return (
    <FilterBlock>
      <form onSubmit={handleSubmit}>
        <InputBlock>
          <Label htmlFor="map">Location</Label>
          <InputContainer>
            <Input
              type="text"
              id="map"
              name="location"
              placeholder="City"
              value={filters.location}
              onChange={handleInputChange}
            />
            <SvgMap width="18" height="20">
              <use href={icons + '#icon-map-pin'}></use>
            </SvgMap>
          </InputContainer>
        </InputBlock>
        <Paragraph>Filters</Paragraph>
        <EquipBlock>
          <Header>Vehicle equipment</Header>
          <EquipmentList>
            <EquipmentItem>
              <EquipInput type="checkbox" />
              <svg width="32" height="32">
                <use href={icons + '#icon-ac'}></use>
              </svg>
              <StyledSpan>AC</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="checkbox" />
              <SvgDetail width="32" height="32">
                <use href={icons + '#icon-automatic'}></use>
              </SvgDetail>
              <StyledSpan>Automatic</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="checkbox" />
              <SvgDetail width="32" height="32">
                <use href={icons + '#icon-kitchen'}></use>
              </SvgDetail>
              <StyledSpan>Kitchen</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="checkbox" />
              <SvgDetail width="32" height="32">
                <use href={icons + '#icon-tv'}></use>
              </SvgDetail>
              <StyledSpan>TV</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="checkbox" />
              <SvgDetail width="32" height="32">
                <use href={icons + '#icon-shower'}></use>
              </SvgDetail>
              <StyledSpan>Shower/WC</StyledSpan>
            </EquipmentItem>
          </EquipmentList>
        </EquipBlock>
        <VehicleBlock>
          <Header>Vehicle type</Header>
          <EquipmentList>
            <EquipmentItem>
              <EquipInput type="radio" />
              <svg width="40" height="28">
                <use href={icons + '#icon-van'}></use>
              </svg>
              <StyledSpan>Van</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="radio" />
              <svg width="40" height="28">
                <use href={icons + '#icon-fully-integrated'}></use>
              </svg>
              <StyledSpan>Fully Integrated</StyledSpan>
            </EquipmentItem>
            <EquipmentItem>
              <EquipInput type="radio" />
              <svg width="40" height="28">
                <use href={icons + '#icon-alcove'}></use>
              </svg>
              <StyledSpan>Alcove</StyledSpan>
            </EquipmentItem>
          </EquipmentList>
        </VehicleBlock>
        <BtnBlock>
          <BtnSearch type="submit">Search</BtnSearch>
          <BtnDelete type="button" onClick={handleReset}>
            Reset
          </BtnDelete>
        </BtnBlock>
      </form>
    </FilterBlock>
  );
};

export default FiltersList;
