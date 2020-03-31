import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aqui ficarão os favoritos.</Text>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Repositories')}>
        <Text style={styles.detailButtonText}>Ir para repositórios</Text>
      </TouchableOpacity>
    </View>
  );
}
