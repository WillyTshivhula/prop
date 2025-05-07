
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.navItem, styles.activeNav]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.navItem}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewProposal')}>
          <Text style={styles.navItem}>New Proposal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProposals')}>
          <Text style={styles.navItem}>My Proposals</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.main} contentContainerStyle={styles.mainContent}>
        <Text style={styles.heading}>Welcome to MIRA</Text>

        {/* MIRA Section (image left, text right) */}
        <View style={styles.product}>
          <Image
            source={require('../assets/MIRA.png')}
            style={styles.productImage}
          />
          <View style={styles.productContent}>
            <Text style={styles.productTitle}>
              MIRA – My Intelligent Proposal Assistant
            </Text>
            <Text style={styles.productText}>
              Transform how you create proposals. MIRA uses advanced AI to draft
              compelling, pitch-perfect proposals in minutes — complete with
              executive summaries, tailored solution narratives, and polished
              pricing tables.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NewProposal')}
            >
              <Text style={styles.buttonText}>Get Started with MIRA</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CORA Section (text left, image right) */}
        <View style={[styles.product, styles.productReverse]}>
          <Image
            source={require('../assets/CORA.png')}
            style={[styles.productImage, styles.productImageReversed]}
          />
          <View style={styles.productContent}>
            <Text style={styles.productTitle}>
              CORA – Contracts Analyzer
            </Text>
            <Text style={styles.productText}>
              Streamline your contract reviews with CORA’s AI-driven analysis.
              Identify risks, extract key clauses, and receive actionable
              recommendations — all within seconds.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('About')}
            >
              <Text style={styles.buttonText}>Learn More about CORA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    width: 240,
    backgroundColor: '#0D2B4B',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  navItem: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  activeNav: {
    backgroundColor: '#E31937',
  },
  main: {
    flex: 1,
  },
  mainContent: {
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D2B4B',
    marginBottom: 32,
  },

  /* Shared product style */
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
  },
  /* Reverse layout for CORA */
  productReverse: {
    flexDirection: 'row-reverse',
  },

  productImage: {
    width: 240,
    height: 240,
    resizeMode: 'cover',
    borderRadius: 12,
    marginRight: 32,  // default spacing
  },
  /* Override for reversed image */
  productImageReversed: {
    marginRight: 0,
    marginLeft: 32,
  },

  productContent: {
    flex: 1,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D2B4B',
    marginBottom: 12,
  },
  productText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#E31937',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
