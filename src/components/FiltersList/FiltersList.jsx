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
  EquipLabel,
} from './FiltersList.styled';
import { SvgDetail } from 'components/CamperCard/CamperCard.styled';
import { selectItemsForFilter } from '../../redux/adverts/advertsSelectors';
import { useEffect, useState } from 'react';
import {
  resetFilteredCampers,
  setFilteredCampers,
} from '../../redux/adverts/advertsSlice';
import { getAllCampersThunk } from '../../redux/adverts/advertsThunks';
import Notiflix from 'notiflix';

const FiltersList = () => {
  const campers = useSelector(selectItemsForFilter);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    location: '',
    equipment: {
      airConditioner: false,
      kitchen: false,
      TV: false,
      shower: false,
    },
    transmission: false,
    vehicleType: '',
  });
  const [hasResult, setHasResult] = useState(true);

  useEffect(() => {
    dispatch(getAllCampersThunk());
  }, [dispatch]);

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters({
        ...filters,
        equipment: {
          ...filters.equipment,
          [name]: checked,
        },
      });
    } else if (type === 'radio') {
      setFilters({ ...filters, vehicleType: value });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleTransmission = e => {
    const { checked } = e.target;
    setFilters({ ...filters, transmission: checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filtered = campers.filter(camper => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const matchesEquipment = Object.keys(filters.equipment).every(
        key => !filters.equipment[key] || camper.details[key] >= 1
      );
      const matchesTransmission =
        !filters.transmission || camper.transmission === 'automatic';
      const matchesType =
        !filters.vehicleType || camper.form === filters.vehicleType;
      return (
        matchesLocation &&
        matchesEquipment &&
        matchesTransmission &&
        matchesType
      );
    });

    if (filtered.length === 0) {
      setHasResult(false);
      Notiflix.Notify.failure('No campers with these parameters were found');
      console.log(hasResult);
    } else {
      dispatch(setFilteredCampers(filtered));
    }
  };

  const handleReset = () => {
    setFilters({
      location: '',
      equipment: {
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false,
      },
      transmission: false,
      vehicleType: '',
    });
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
            <EquipmentItem checked={filters.equipment.airConditioner}>
              <EquipLabel>
                <EquipInput
                  type="checkbox"
                  name="airConditioner"
                  checked={filters.equipment.airConditioner}
                  onChange={handleInputChange}
                />
                <svg width="32" height="32">
                  <use href={icons + '#icon-ac'}></use>
                </svg>
                <StyledSpan>AC</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.transmission}>
              <EquipLabel>
                <EquipInput
                  type="checkbox"
                  name="transmission"
                  checked={filters.transmission}
                  onChange={handleTransmission}
                />
                <SvgDetail width="32" height="32">
                  <use href={icons + '#icon-automatic'}></use>
                </SvgDetail>
                <StyledSpan>Automatic</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.equipment.kitchen}>
              <EquipLabel>
                <EquipInput
                  type="checkbox"
                  name="kitchen"
                  checked={filters.equipment.kitchen}
                  onChange={handleInputChange}
                />
                <SvgDetail width="32" height="32">
                  <use href={icons + '#icon-kitchen'}></use>
                </SvgDetail>
                <StyledSpan>Kitchen</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.equipment.TV}>
              <EquipLabel>
                <EquipInput
                  type="checkbox"
                  name="TV"
                  checked={filters.equipment.TV}
                  onChange={handleInputChange}
                />
                <SvgDetail width="32" height="32">
                  <use href={icons + '#icon-tv'}></use>
                </SvgDetail>
                <StyledSpan>TV</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.equipment.shower}>
              <EquipLabel>
                <EquipInput
                  type="checkbox"
                  name="shower"
                  checked={filters.equipment.shower}
                  onChange={handleInputChange}
                />
                <SvgDetail width="32" height="32">
                  <use href={icons + '#icon-shower'}></use>
                </SvgDetail>
                <StyledSpan>Shower/WC</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
          </EquipmentList>
        </EquipBlock>
        <VehicleBlock>
          <Header>Vehicle type</Header>
          <EquipmentList>
            <EquipmentItem checked={filters.vehicleType === 'panelTruck'}>
              <EquipLabel>
                <EquipInput
                  type="radio"
                  name="vehicleType"
                  value="panelTruck"
                  checked={filters.vehicleType === 'panelTruck'}
                  onChange={handleInputChange}
                />
                <svg width="40" height="28">
                  <use href={icons + '#icon-van'}></use>
                </svg>
                <StyledSpan>Van</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.vehicleType === 'fullyIntegrated'}>
              <EquipLabel>
                <EquipInput
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                  checked={filters.vehicleType === 'fullyIntegrated'}
                  onChange={handleInputChange}
                />
                <svg width="40" height="28">
                  <use href={icons + '#icon-fully-integrated'}></use>
                </svg>
                <StyledSpan>Fully Integrated</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
            <EquipmentItem checked={filters.vehicleType === 'alcove'}>
              <EquipLabel>
                <EquipInput
                  type="radio"
                  name="vehicleType"
                  value="alcove"
                  checked={filters.vehicleType === 'alcove'}
                  onChange={handleInputChange}
                />
                <svg width="40" height="28">
                  <use href={icons + '#icon-alcove'}></use>
                </svg>
                <StyledSpan>Alcove</StyledSpan>
              </EquipLabel>
            </EquipmentItem>
          </EquipmentList>
        </VehicleBlock>
        <BtnBlock>
          <BtnSearch type="submit" aria-label='Search'>Search</BtnSearch>
          <BtnDelete type="button" aria-label='Reset' onClick={handleReset}>
            Reset
          </BtnDelete>
        </BtnBlock>
      </form>
    </FilterBlock>
  );
};

export default FiltersList;
