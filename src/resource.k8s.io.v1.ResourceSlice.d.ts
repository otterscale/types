/** Generated from Remote JSON Schema for resource.k8s.io.v1.ResourceSlice */

/**
 * ResourceSlice represents one or more resources in a pool of similar resources, managed by a common driver. A pool may span more than one ResourceSlice, and exactly how many ResourceSlices comprise a pool is determined by the driver.
 *
 * At the moment, the only supported resources are devices with attributes and capacities. Each device in a given pool, regardless of how many ResourceSlices, must have a unique name. The ResourceSlice in which a device gets published may change over time. The unique identifier for a device is the tuple <driver name>, <pool name>, <device name>.
 *
 * Whenever a driver needs to update a pool, it increments the pool.Spec.Pool.Generation number and updates all ResourceSlices with that new number and new resource definitions. A consumer must only use ResourceSlices with the highest generation number and ignore all others.
 *
 * When allocating all resources in a pool matching certain criteria or when looking for the best solution among several different alternatives, a consumer should check the number of ResourceSlices in a pool (included in each ResourceSlice) to determine whether its view of a pool is complete and if not, should wait until the driver has completed updating the pool.
 *
 * For resources that are not local to a node, the node name is not set. Instead, the driver may use a node selector to specify where the devices are available.
 *
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface ResourceK8SIoV1ResourceSlice {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
   */
  spec: {
    /**
     * AllNodes indicates that all nodes have access to the resources in the pool.
     *
     * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
     */
    allNodes?: boolean;
    /**
     * Devices lists some or all of the devices in this pool.
     *
     * Must not have more than 128 entries. If any device uses taints or consumes counters the limit is 64.
     *
     * Only one of Devices and SharedCounters can be set in a ResourceSlice.
     */
    devices?: {
      /**
       * AllNodes indicates that all nodes have access to the device.
       *
       * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
       */
      allNodes?: boolean;
      /**
       * AllowMultipleAllocations marks whether the device is allowed to be allocated to multiple DeviceRequests.
       *
       * If AllowMultipleAllocations is set to true, the device can be allocated more than once, and all of its capacity is consumable, regardless of whether the requestPolicy is defined or not.
       */
      allowMultipleAllocations?: boolean;
      /**
       * Attributes defines the set of attributes for this device. The name of each attribute must be unique in that set.
       *
       * The maximum number of attributes and capacities combined is 32.
       */
      attributes?: {
        /**
         * DeviceAttribute must have exactly one field set.
         */
        [k: string]: {
          /**
           * BoolValue is a true/false value.
           */
          bool?: boolean;
          /**
           * IntValue is a number.
           */
          int?: number;
          /**
           * StringValue is a string. Must not be longer than 64 characters.
           */
          string?: string;
          /**
           * VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.
           */
          version?: string;
          [k: string]: unknown;
        };
      };
      /**
       * BindingConditions defines the conditions for proceeding with binding. All of these conditions must be set in the per-device status conditions with a value of True to proceed with binding the pod to the node while scheduling the pod.
       *
       * The maximum number of binding conditions is 4.
       *
       * The conditions must be a valid condition type string.
       *
       * This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingConditions?: string[];
      /**
       * BindingFailureConditions defines the conditions for binding failure. They may be set in the per-device status conditions. If any is set to "True", a binding failure occurred.
       *
       * The maximum number of binding failure conditions is 4.
       *
       * The conditions must be a valid condition type string.
       *
       * This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindingFailureConditions?: string[];
      /**
       * BindsToNode indicates if the usage of an allocation involving this device has to be limited to exactly the node that was chosen when allocating the claim. If set to true, the scheduler will set the ResourceClaim.Status.Allocation.NodeSelector to match the node where the allocation was made.
       *
       * This is an alpha field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
       */
      bindsToNode?: boolean;
      /**
       * Capacity defines the set of capacities for this device. The name of each capacity must be unique in that set.
       *
       * The maximum number of attributes and capacities combined is 32.
       */
      capacity?: {
        /**
         * DeviceCapacity describes a quantity associated with a device.
         */
        [k: string]: {
          /**
           * CapacityRequestPolicy defines how requests consume device capacity.
           *
           * Must not set more than one ValidRequestValues.
           */
          requestPolicy?: {
            /**
             * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
             *
             * The serialization format is:
             *
             * ``` <quantity>        ::= <signedNumber><suffix>
             *
             * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
             *
             * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
             *
             * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
             *
             * <decimalSI>       ::= m | "" | k | M | G | T | P | E
             *
             * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
             *
             * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
             *
             * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
             *
             * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
             *
             * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
             *
             * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
             *
             * The sign will be omitted unless the number is negative.
             *
             * Examples:
             *
             * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
             *
             * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
             *
             * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
             *
             * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
             */
            default?: string | number;
            /**
             * CapacityRequestPolicyRange defines a valid range for consumable capacity values.
             *
             *   - If the requested amount is less than Min, it is rounded up to the Min value.
             *   - If Step is set and the requested amount is between Min and Max but not aligned with Step,
             *     it will be rounded up to the next value equal to Min + (n * Step).
             *   - If Step is not set, the requested amount is used as-is if it falls within the range Min to Max (if set).
             *   - If the requested or rounded amount exceeds Max (if set), the request does not satisfy the policy,
             *     and the device cannot be allocated.
             */
            validRange?: {
              /**
               * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
               *
               * The serialization format is:
               *
               * ``` <quantity>        ::= <signedNumber><suffix>
               *
               * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
               *
               * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
               *
               * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
               *
               * <decimalSI>       ::= m | "" | k | M | G | T | P | E
               *
               * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
               *
               * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
               *
               * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
               *
               * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
               *
               * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
               *
               * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
               *
               * The sign will be omitted unless the number is negative.
               *
               * Examples:
               *
               * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
               *
               * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
               *
               * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
               *
               * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
               */
              max?: string | number;
              /**
               * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
               *
               * The serialization format is:
               *
               * ``` <quantity>        ::= <signedNumber><suffix>
               *
               * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
               *
               * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
               *
               * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
               *
               * <decimalSI>       ::= m | "" | k | M | G | T | P | E
               *
               * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
               *
               * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
               *
               * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
               *
               * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
               *
               * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
               *
               * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
               *
               * The sign will be omitted unless the number is negative.
               *
               * Examples:
               *
               * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
               *
               * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
               *
               * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
               *
               * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
               */
              min: string | number;
              /**
               * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
               *
               * The serialization format is:
               *
               * ``` <quantity>        ::= <signedNumber><suffix>
               *
               * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
               *
               * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
               *
               * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
               *
               * <decimalSI>       ::= m | "" | k | M | G | T | P | E
               *
               * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
               *
               * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
               *
               * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
               *
               * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
               *
               * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
               *
               * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
               *
               * The sign will be omitted unless the number is negative.
               *
               * Examples:
               *
               * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
               *
               * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
               *
               * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
               *
               * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
               */
              step?: string | number;
              [k: string]: unknown;
            };
            /**
             * ValidValues defines a set of acceptable quantity values in consuming requests.
             *
             * Must not contain more than 10 entries. Must be sorted in ascending order.
             *
             * If this field is set, Default must be defined and it must be included in ValidValues list.
             *
             * If the requested amount does not match any valid value but smaller than some valid values, the scheduler calculates the smallest valid value that is greater than or equal to the request. That is: min(ceil(requestedValue) ∈ validValues), where requestedValue ≤ max(validValues).
             *
             * If the requested amount exceeds all valid values, the request violates the policy, and this device cannot be allocated.
             */
            validValues?: (string | number)[];
            [k: string]: unknown;
          };
          /**
           * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
           *
           * The serialization format is:
           *
           * ``` <quantity>        ::= <signedNumber><suffix>
           *
           * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
           *
           * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
           *
           * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
           *
           * <decimalSI>       ::= m | "" | k | M | G | T | P | E
           *
           * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
           *
           * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
           *
           * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
           *
           * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
           *
           * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
           *
           * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
           *
           * The sign will be omitted unless the number is negative.
           *
           * Examples:
           *
           * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
           *
           * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
           *
           * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
           *
           * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
           */
          value: string | number;
          [k: string]: unknown;
        };
      };
      /**
       * ConsumesCounters defines a list of references to sharedCounters and the set of counters that the device will consume from those counter sets.
       *
       * There can only be a single entry per counterSet.
       *
       * The maximum number of device counter consumptions per device is 2.
       */
      consumesCounters?: {
        /**
         * CounterSet is the name of the set from which the counters defined will be consumed.
         */
        counterSet: string;
        /**
         * Counters defines the counters that will be consumed by the device.
         *
         * The maximum number of counters is 32.
         */
        counters: {
          /**
           * Counter describes a quantity associated with a device.
           */
          [k: string]: {
            /**
             * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
             *
             * The serialization format is:
             *
             * ``` <quantity>        ::= <signedNumber><suffix>
             *
             * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
             *
             * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
             *
             * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
             *
             * <decimalSI>       ::= m | "" | k | M | G | T | P | E
             *
             * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
             *
             * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
             *
             * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
             *
             * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
             *
             * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
             *
             * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
             *
             * The sign will be omitted unless the number is negative.
             *
             * Examples:
             *
             * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
             *
             * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
             *
             * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
             *
             * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
             */
            value: string | number;
            [k: string]: unknown;
          };
        };
        [k: string]: unknown;
      }[];
      /**
       * Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label.
       */
      name: string;
      /**
       * NodeName identifies the node where the device is available.
       *
       * Must only be set if Spec.PerDeviceNodeSelection is set to true. At most one of NodeName, NodeSelector and AllNodes can be set.
       */
      nodeName?: string;
      /**
       * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
       */
      nodeSelector?: {
        /**
         * Required. A list of node selector terms. The terms are ORed.
         */
        nodeSelectorTerms: {
          /**
           * A list of node selector requirements by node's labels.
           */
          matchExpressions?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             *
             * Possible enum values:
             *  - `"DoesNotExist"`
             *  - `"Exists"`
             *  - `"Gt"`
             *  - `"In"`
             *  - `"Lt"`
             *  - `"NotIn"`
             */
            operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn';
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values?: string[];
            [k: string]: unknown;
          }[];
          /**
           * A list of node selector requirements by node's fields.
           */
          matchFields?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             *
             * Possible enum values:
             *  - `"DoesNotExist"`
             *  - `"Exists"`
             *  - `"Gt"`
             *  - `"In"`
             *  - `"Lt"`
             *  - `"NotIn"`
             */
            operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn';
            /**
             * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
             */
            values?: string[];
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * If specified, these are the driver-defined taints.
       *
       * The maximum number of taints is 16. If taints are set for any device in a ResourceSlice, then the maximum number of allowed devices per ResourceSlice is 64 instead of 128.
       *
       * This is an alpha field and requires enabling the DRADeviceTaints feature gate.
       */
      taints?: {
        /**
         * The effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them.
         *
         * Valid effects are None, NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. More effects may get added in the future. Consumers must treat unknown effects like None.
         *
         *
         * Possible enum values:
         *  - `"NoExecute"` Evict any already-running pods that do not tolerate the device taint.
         *  - `"NoSchedule"` Do not allow new pods to schedule which use a tainted device unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running.
         *  - `"None"` No effect, the taint is purely informational.
         */
        effect: 'NoExecute' | 'NoSchedule' | 'None';
        /**
         * The taint key to be applied to a device. Must be a label name.
         */
        key: string;
        /**
         * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
         */
        timeAdded?: string;
        /**
         * The taint value corresponding to the taint key. Must be a label value.
         */
        value?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[];
    /**
     * Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
     *
     * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters. This field is immutable.
     */
    driver: string;
    /**
     * NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.
     *
     * This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.
     *
     * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.
     */
    nodeName?: string;
    /**
     * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
     */
    nodeSelector?: {
      /**
       * Required. A list of node selector terms. The terms are ORed.
       */
      nodeSelectorTerms: {
        /**
         * A list of node selector requirements by node's labels.
         */
        matchExpressions?: {
          /**
           * The label key that the selector applies to.
           */
          key: string;
          /**
           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
           *
           * Possible enum values:
           *  - `"DoesNotExist"`
           *  - `"Exists"`
           *  - `"Gt"`
           *  - `"In"`
           *  - `"Lt"`
           *  - `"NotIn"`
           */
          operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn';
          /**
           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
           */
          values?: string[];
          [k: string]: unknown;
        }[];
        /**
         * A list of node selector requirements by node's fields.
         */
        matchFields?: {
          /**
           * The label key that the selector applies to.
           */
          key: string;
          /**
           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
           *
           * Possible enum values:
           *  - `"DoesNotExist"`
           *  - `"Exists"`
           *  - `"Gt"`
           *  - `"In"`
           *  - `"Lt"`
           *  - `"NotIn"`
           */
          operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn';
          /**
           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
           */
          values?: string[];
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * PerDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.
     *
     * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
     */
    perDeviceNodeSelection?: boolean;
    /**
     * ResourcePool describes the pool that ResourceSlices belong to.
     */
    pool: {
      /**
       * Generation tracks the change in a pool over time. Whenever a driver changes something about one or more of the resources in a pool, it must change the generation in all ResourceSlices which are part of that pool. Consumers of ResourceSlices should only consider resources from the pool with the highest generation number. The generation may be reset by drivers, which should be fine for consumers, assuming that all ResourceSlices in a pool are updated to match or deleted.
       *
       * Combined with ResourceSliceCount, this mechanism enables consumers to detect pools which are comprised of multiple ResourceSlices and are in an incomplete state.
       */
      generation: number;
      /**
       * Name is used to identify the pool. For node-local devices, this is often the node name, but this is not required.
       *
       * It must not be longer than 253 characters and must consist of one or more DNS sub-domains separated by slashes. This field is immutable.
       */
      name: string;
      /**
       * ResourceSliceCount is the total number of ResourceSlices in the pool at this generation number. Must be greater than zero.
       *
       * Consumers can use this to check whether they have seen all ResourceSlices belonging to the same pool.
       */
      resourceSliceCount: number;
      [k: string]: unknown;
    };
    /**
     * SharedCounters defines a list of counter sets, each of which has a name and a list of counters available.
     *
     * The names of the counter sets must be unique in the ResourcePool.
     *
     * Only one of Devices and SharedCounters can be set in a ResourceSlice.
     *
     * The maximum number of counter sets is 8.
     */
    sharedCounters?: {
      /**
       * Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
       *
       * The maximum number of counters is 32.
       */
      counters: {
        /**
         * Counter describes a quantity associated with a device.
         */
        [k: string]: {
          /**
           * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
           *
           * The serialization format is:
           *
           * ``` <quantity>        ::= <signedNumber><suffix>
           *
           * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
           *
           * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
           *
           * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
           *
           * <decimalSI>       ::= m | "" | k | M | G | T | P | E
           *
           * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
           *
           * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
           *
           * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
           *
           * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
           *
           * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
           *
           * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
           *
           * The sign will be omitted unless the number is negative.
           *
           * Examples:
           *
           * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
           *
           * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
           *
           * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
           *
           * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
           */
          value: string | number;
          [k: string]: unknown;
        };
      };
      /**
       * Name defines the name of the counter set. It must be a DNS label.
       */
      name: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
