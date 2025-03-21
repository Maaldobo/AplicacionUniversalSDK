package com.maaldobo.AppAUniversal

import android.app.Application
import android.content.Context
import com.arcxp.ArcXPMobileSDK
import com.arcxp.commons.util.Success
import com.arcxp.content.ArcXPContentConfig
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class ArcXpModule : Module() {
    // Contexto de la aplicación
    private val context: Context
        get() = appContext.reactContext ?: throw Exception("React context not found")

    override fun definition() = ModuleDefinition {
        Name("ArcXpModule")

        // Función para inicializar el SDK ArcXP
        Function("initializeSdk") {
            try {
                // Configuración de contenido de ArcXP
                val contentConfig = ArcXPContentConfig.Builder()
                    .setNavigationEndpoint("mobile-nav")
                    .setVideoCollectionName("mobile-video")
                    .setCacheSize(1024)
                    .setCacheTimeUntilUpdate(5)
                    .setPreloading(true)
                    .build()

                    //3312
                // Inicialización del SDK ArcXP&#8203;:contentReference[oaicite:5]{index=5}
                ArcXPMobileSDK.initialize(
                    application = context.applicationContext as Application,
                    site = "TU_SITE",              // +++++MODIFICACION+++++
                    org = "TU_ORG",                // +++++MODIFICACION+++++
                    environment = "sandbox",       // +++++MODIFICACION+++++ ("sandbox" o "prod")
                    contentConfig = contentConfig,
                    baseUrl = "https://<tu-site>-<tu-org>-sandbox.web.arc-cdn.net"  // +++++MODIFICACION+++++
                )
            } catch (e: Exception) {
                return@Function "Error during initialization: ${e.message}"
            }
            "ArcXP SDK inicializado correctamente"
        }

        // Función asíncrona para obtener un artículo en formato JSON desde ArcXP&#8203;:contentReference[oaicite:6]{index=6}&#8203;:contentReference[oaicite:7]{index=7}
        AsyncFunction("fetchArticle") { articleId: String, promise: Promise ->
            CoroutineScope(Dispatchers.Main).launch {
                try {
                    val resultJson = withContext(Dispatchers.IO) {
                        (ArcXPMobileSDK.contentManager()
                            .getContentAsJsonSuspend(id = articleId) as Success).success
                    }
                    promise.resolve(resultJson)
                } catch (e: Exception) {
                    promise.reject("ArcXPError", e.localizedMessage, e)
                }
            }
        }

        // Función asíncrona para obtener una colección (lista de artículos) en JSON&#8203;:contentReference[oaicite:8]{index=8}&#8203;:contentReference[oaicite:9]{index=9}
        AsyncFunction("fetchCollection") { collectionAlias: String, promise: Promise ->
            CoroutineScope(Dispatchers.Main).launch {
                try {
                    val resultJson = withContext(Dispatchers.IO) {
                        (ArcXPMobileSDK.contentManager()
                            .getCollectionAsJsonSuspend(collectionAlias = collectionAlias) as Success).success
                    }
                    promise.resolve(resultJson)
                } catch (e: Exception) {
                    promise.reject("ArcXPError", e.localizedMessage, e)
                }
            }
        }

        // Función asíncrona para obtener la lista de secciones de navegación (secciones del sitio)&#8203;:contentReference[oaicite:10]{index=10}&#8203;:contentReference[oaicite:11]{index=11}
        AsyncFunction("fetchSectionList") { promise: Promise ->
            CoroutineScope(Dispatchers.Main).launch {
                try {
                    val resultJson = withContext(Dispatchers.IO) {
                        (ArcXPMobileSDK.contentManager()
                            .getSectionListAsJsonSuspend() as Success).success
                    }
                    promise.resolve(resultJson)
                } catch (e: Exception) {
                    promise.reject("ArcXPError", e.localizedMessage, e)
                }
            }
        }
    }
}
