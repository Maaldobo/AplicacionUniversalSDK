package com.maaldobo.AppAUniversal

import android.app.Application
import android.content.res.Configuration

import com.arcxp.sdk.ArcXPMobileSDK               //3312
import com.arcxp.sdk.config.ArcXPContentConfig


import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader
import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).packages
                return packages
            }

            override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

            override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
        }
    )

    override val reactHost: ReactHost
        get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)

    override fun onCreate() {
        super.onCreate()
        
        // Inicializar ArcXP SDK      3312
        val arcxpContentConfig = ArcXPContentConfig.Builder()
        .setBaseUrl("https://yourOrg-yourSite-yourEnv.cdn.arcpublishing.com") // Personaliza con tu base URL
        .setOrgName("yourOrg") // Nombre de la organización
        .setSite("yourSite") // Nombre del sitio
        .setEnvironment("prod") // Ambiente (ej. prod, staging, dev)
        .setNavigationEndpoint("mobile-nav") // Endpoint de navegación
        .setCacheSize(1024) // Tamaño máximo del caché en MB (entre 10 y 1024)
        .setCacheTimeUntilUpdate(5) // Minutos antes de actualizar caché
        .setPreloading(true) // Habilitar precarga de contenido
        .build()

        ArcXPMobileSDK.initialize(
            this,
            "yourOrg",
            "yourSite",
            "yourEnv",
            "yourBaseUrl",
            arcxpContentConfig,
            null,
            null
        )

        SoLoader.init(this, OpenSourceMergedSoMapping)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            load()
        }
        ApplicationLifecycleDispatcher.onApplicationCreate(this)
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
    }
}
