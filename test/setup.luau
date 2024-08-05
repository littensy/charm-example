for key in _G do
	-- Clear registered modules to reset the roblox-ts runtime
	if typeof(key) == "Instance" and key:IsA("ModuleScript") then
		_G[key] = nil
	end
end

return nil
