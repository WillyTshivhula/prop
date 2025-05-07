// screens/About.js

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking
} from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          source={require('../assets/logo2.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={[styles.navItem, styles.activeNav]}>About</Text>
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
        <Text style={styles.heading}>About</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.sectionText}>
            At Gijima, we envision a future where proposal creation is no longer a bottleneck but a competitive advantage. MIRA harnesses generative AI to transform raw ideas into compelling, client‑ready proposals in minutes—empowering teams to focus on strategy, relationships, and innovation.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            We are on a mission to supercharge Gijima’s go‑to‑market engine. By seamlessly blending domain expertise with AI-driven automation, we equip every team and partner with the tools to craft persuasive, brand‑consistent proposals at scale—accelerating wins and elevating customer trust.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why AI‑Powered Proposals?</Text>
          {[
            'Lightning‑Fast Delivery: From brief to full proposal in minutes—outpace competitors and respond to opportunities instantly.',
            'Rock‑Solid Accuracy: AI continuously ingests the latest service offerings, pricing models, and compliance requirements to eliminate errors.',
            'Brand Consistency: Every proposal adheres to Gijima’s tone, styling, and messaging guidelines—no manual formatting needed.',
            'Deep Customization: Tailor narratives, case studies, and pricing to each client’s industry, size, and pain points with smart prompts.',
            'Scalable Excellence: Empower teams across geographies and verticals to deliver top‑tier proposals without adding headcount.'
          ].map((item, idx) => (
            <Text key={idx} style={styles.listItem}>• {item}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Start with These Proven Prompts</Text>
          <Text style={styles.sectionText}>Use these examples to ignite your proposal creation:</Text>
          {[
            'Generate a cloud‑migration proposal for a mid‑tier financial services client, emphasising security, compliance, and cost optimisation.',
            'Create a detailed Microsoft 365 adoption plan for Sanlam, including governance, training, and support services.',
            'Draft a SaaS‑based property management solution for RoomSeeker, highlighting automation and analytics features.'
          ].map((code, idx) => (
            <View key={idx} style={styles.codeBlock}>
              <Text style={styles.codeText}>
                "{code}"
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Need Assistance?</Text>
          <Text style={styles.sectionText}>
            Our intuitive interface guides you step‑by‑step. Simply enter your client profile, select services, and let MIRA craft the narrative. For questions or advanced customisation, reach out to{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('mailto:proposal.support@gijima.com')}>
              proposal.support@gijima.com
            </Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:     { flex: 1, flexDirection: 'row', backgroundColor: '#f5f5f5' },
  sidebar:     { width: 240, backgroundColor: '#0D2B4B', paddingTop: 50, paddingHorizontal: 16 },
  logo:        { width: 150, height: 50, marginBottom: 40, resizeMode: 'contain', alignSelf: 'center' },
  navItem:     { color: '#fff', fontSize: 18, padding: 12, borderRadius: 6, marginBottom: 20 },
  activeNav:   { backgroundColor: '#E31937' },

  main:        { flex: 1, backgroundColor: '#fff' },
  mainContent: { paddingVertical: 24, paddingHorizontal: 32 },

  heading:     { fontSize: 32, fontWeight: 'bold', color: '#0D2B4B', marginBottom: 32 },

  section:         { marginBottom: 32 },
  sectionTitle:    { fontSize: 22, fontWeight: '600', color: '#0D2B4B', marginBottom: 12 },
  sectionText:     { fontSize: 16, color: '#333', lineHeight: 22, marginBottom: 12 },
  listItem:        { fontSize: 16, color: '#333', marginBottom: 8, lineHeight: 22 },
  codeBlock:       { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 6, marginBottom: 8 },
  codeText:        { fontFamily: 'monospace', fontSize: 14, color: '#333' },
  link:            { color: '#E31937', textDecorationLine: 'underline' },
});
