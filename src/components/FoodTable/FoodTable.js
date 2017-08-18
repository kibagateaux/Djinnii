import React from 'react';
import { View, Text } from 'react-native';

export default ({ updateStats }) => {

  const getNutrientStatsForFoodGroup = (groupName) => {
    const foodNutrients = foodGroups[groupName].nutrients;
    return Object.keys(foodNutrients).map(key => {
      return nutrientGroups[key].attr.characterStats;
    });
  };




  const getCharacterStatsForFoodGroup = (groupName) => {
    return [];
  }

  const updateStatsForFoodGroup = (groupName) => {
    const foodGroupStatMapping = [
      ...getNutrientStatsForFoodGroup(groupName), 
      ...getCharacterStatsForFoodGroup(groupName)
    ];

    const totalStats = foodGroupStatMapping.reduce((prime, sub) => {
      Object.keys(sub).forEach(stat => {
        prime[stat] = prime[stat]? prime[stat] + sub[stat]: sub[stat];
      });
      return prime
    }, {});
    
    updateStats(totalStats);
    
    // Object.keys(totalStats).forEach(stat => {
    //   console.log('stat', totalStats);
    // });
  };

  const renderFoodTrough = () => {
    return Object.keys(foodGroups).map(groupName => {
      return (
        <Text 
          key={groupName} 
          onPress={() => updateStatsForFoodGroup(groupName)}
        > 
          {groupName} 
        </Text>
      );
    });
  };

  return (
    <View>
      {renderFoodTrough()}
    </View>
  )
};


  const nutrientGroups = {
    fat:{
      type: 'fat',
      attr: {
        characterStats: {
          stm: 2,
          int: 1
        },
        nutritionalStats: {
          hydration: -2,
          electrolytes: -1
        }
      }
    },
    protein:{
      type: 'protein',
      attr: {
        characterStats: {
          stm: 2,
          int: 1
        },
        nutritionalStats: {
          hydration: -2,
          electrolytes: -2
        }
      }
    },
    carbohydrate:{
      type: 'carbohydrate',
      attr: {
        characterStats: {
          stm: 2,
          int: 1
        },
        nutritionalStats: {
          hydration: -2,
          electrolytes: 2
        }
      }
    },
    mineral:{
      type: 'minerals',
      attr: {
        characterStats: {
          agy: 1,
          str: 1
        },
        nutritionalStats: {
          hydration: 1,
          electrolytes: 3
        }
      }
    },
    vitamin:{
      type: 'vitamin',
      attr: {
        characterStats: {
          str: 1,
          agy: 1
        },
        nutritionalStats: {
          hydration: 1,
          electrolytes: 1
        }
      }
    },
    water:{
      type: 'water',
      attr: {
        characterStats: {
          str: 1,
          int: 1,
          agy: 2,
          stm: 1
        },
        nutritionalStats: {
          hydration: 10,
          electrolytes: -.01
        }
      }
    },
  };
  
  const foodGroups = {
    fruit: {
      nutrients:{
        water: 3,
        vitamin: 2,
        mineral: 1,
        carbohydrate: 3
      }
    },
    vegetable: {
      nutrients:{
        water: 2,
        vitamin: 1,
        mineral: 3,
        fat: 1
      }
    },
    meat: {
      nutrients:{
        water: -2,
        protein: 1,
        fat: 2,
        mineral: 1
      }
    },
    fish: {
      nutrients:{
        water: -2,
        fat: 3,
        mineral: 3
      }
    },
    nuts: {
      nutrients:{
        water: 1,
        protein: 3,
        mineral: 3,
      }
    }
  };
