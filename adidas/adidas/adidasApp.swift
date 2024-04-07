//
//  adidasApp.swift
//  adidas
//
//  Created by Haya Alghazouli on 2/7/24.
//

import SwiftUI

@main
struct adidasApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: adidasDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
