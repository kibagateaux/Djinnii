package com.djinnii;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import io.branch.rnbranch.*; 

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "djinnii";
    }

    @Override
    protected void onStart() {
        super.onStart();
        RNBranchModule.initSession(this.getIntent().getData(), this);
    }
    
    @Override
    public void onNewIntent(Intent intent) {
        this.setIntent(intent);
    }


}
