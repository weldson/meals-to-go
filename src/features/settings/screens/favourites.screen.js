import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';

import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouriesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
