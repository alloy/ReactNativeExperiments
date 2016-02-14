workspace 'ReactNativeExperiments'

project 'EmbedInExistingNavigationStack/EmbedInExistingNavigationStack.xcodeproj'

target 'EmbedInExistingNavigationStack' do
  pod 'React', :path => './node_modules/react-native', :subspecs => [
    'Core',
    'RCTWebSocket', # Needed for source loading during dev
    'RCTText',
    #'RCTImage',
    #'RCTNetwork',
  ]
end
