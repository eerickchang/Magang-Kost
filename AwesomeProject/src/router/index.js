import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import { HomeOwner } from '../pages'
import { LanjutanEditKost } from '../pages'


const router = () => {
  return (
      <NativeRouter>
    <View>
      <Switch>
          <Route exact path="/" component={HomeOwner}/>
          <Route exact path="/LanjutanEditKost" component={LanjutanEditKost}/>
      </Switch>
    </View>
    </NativeRouter>
  )
}

export default router

const styles = StyleSheet.create({})