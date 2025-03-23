package com.maaldobo.AppAUniversal.arcxp

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.arcxp.sdk.ArcXPMobileSDK

import com.arcxp.sdk.content.model.Success
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class ArcXpModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("ArcXpModule")

    AsyncFunction("getStory") { storyId: String ->
      // Ejemplo de llamada asíncrona
      try {
        val result = withContext(Dispatchers.IO) {
          val response = ArcXPMobileSDK.contentManager().getContentAsJsonSuspend(storyId)
          if (response is Success) response.success
          else throw Exception("Error en respuesta")
        }
        result
      } catch (e: Exception) {
        throw Exception("Error getStory: ${e.message}", e)
      }
    }

    AsyncFunction("getCollection") { alias: String ->
      val result = withContext(Dispatchers.IO) {
        val response = ArcXPMobileSDK.contentManager().getCollectionAsJsonSuspend(alias)
        if (response is Success) response.success
        else throw Exception("Error en respuesta")
      }
      result
    }


    
  }
}