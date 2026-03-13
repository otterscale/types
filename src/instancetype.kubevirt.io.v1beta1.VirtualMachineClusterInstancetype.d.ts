/** Generated from Remote JSON Schema for instancetype.kubevirt.io.v1beta1.VirtualMachineClusterInstancetype */

/**
 * VirtualMachineClusterInstancetype is a cluster scoped version of VirtualMachineInstancetype resource.
 */
export interface InstancetypeKubevirtIoV1Beta1VirtualMachineClusterInstancetype {
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
   * Required spec describing the instancetype
   */
  spec: {
    /**
     * Optionally defines the required Annotations to be used by the instance type and applied to the VirtualMachineInstance
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Required CPU related attributes of the instancetype.
     */
    cpu: {
      /**
       * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node
       * with enough dedicated pCPUs and pin the vCPUs to it.
       */
      dedicatedCPUPlacement?: boolean;
      /**
       * Required number of vCPUs to expose to the guest.
       *
       * The resulting CPU topology being derived from the optional PreferredCPUTopology attribute of CPUPreferences that itself defaults to PreferSockets.
       */
      guest: number;
      /**
       * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place
       * the emulator thread on it.
       */
      isolateEmulatorThread?: boolean;
      /**
       * MaxSockets specifies the maximum amount of sockets that can be hotplugged
       */
      maxSockets?: number;
      /**
       * Model specifies the CPU model inside the VMI.
       * List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map.
       * It is possible to specify special cases like "host-passthrough" to get the same CPU as the node
       * and "host-model" to get CPU closest to the node one.
       * Defaults to host-model.
       */
      model?: string;
      /**
       * NUMA allows specifying settings for the guest NUMA topology
       */
      numa?: {
        /**
         * GuestMappingPassthrough will create an efficient guest topology based on host CPUs exclusively assigned to a pod.
         * The created topology ensures that memory and CPUs on the virtual numa nodes never cross boundaries of host numa nodes.
         */
        guestMappingPassthrough?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Realtime instructs the virt-launcher to tune the VMI for lower latency, optional for real time workloads
       */
      realtime?: {
        /**
         * Mask defines the vcpu mask expression that defines which vcpus are used for realtime. Format matches libvirt's expressions.
         * Example: "0-3,^1","0,2,3","2-3"
         */
        mask?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Optionally defines any GPU devices associated with the instancetype.
     */
    gpus?: {
      /**
       * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
       * device is allocated
       */
      claimName?: string;
      /**
       * DeviceName is the name of the device provisioned by device-plugins
       */
      deviceName?: string;
      /**
       * Name of the GPU device as exposed by a device plugin
       */
      name: string;
      /**
       * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
       * device is requested
       */
      requestName?: string;
      /**
       * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
       */
      tag?: string;
      virtualGPUOptions?: {
        display?: {
          /**
           * Enabled determines if a display addapter backed by a vGPU should be enabled or disabled on the guest.
           * Defaults to true.
           */
          enabled?: boolean;
          /**
           * Enables a boot framebuffer, until the guest OS loads a real GPU driver
           * Defaults to true.
           */
          ramFB?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    /**
     * Optionally defines any HostDevices associated with the instancetype.
     */
    hostDevices?: {
      /**
       * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
       * device is allocated
       */
      claimName?: string;
      /**
       * DeviceName is the name of the device provisioned by device-plugins
       */
      deviceName?: string;
      name: string;
      /**
       * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
       * device is requested
       */
      requestName?: string;
      /**
       * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
       */
      tag?: string;
      [k: string]: unknown;
    }[];
    /**
     * Optionally specifies the IOThreads options to be used by the instancetype.
     */
    ioThreads?: {
      /**
       * SupplementalPoolThreadCount specifies how many iothreads are allocated for the supplementalPool policy.
       */
      supplementalPoolThreadCount?: number;
      [k: string]: unknown;
    };
    /**
     * Optionally defines the IOThreadsPolicy to be used by the instancetype.
     */
    ioThreadsPolicy?: string;
    /**
     * Optionally defines the LaunchSecurity to be used by the instancetype.
     */
    launchSecurity?: {
      /**
       * AMD Secure Encrypted Virtualization (SEV).
       */
      sev?: {
        /**
         * If specified, run the attestation process for a vmi.
         */
        attestation?: {
          [k: string]: unknown;
        };
        /**
         * Base64 encoded guest owner's Diffie-Hellman key.
         */
        dhCert?: string;
        /**
         * Guest policy flags as defined in AMD SEV API specification.
         * Note: due to security reasons it is not allowed to enable guest debugging. Therefore NoDebug flag is not exposed to users and is always true.
         */
        policy?: {
          /**
           * SEV-ES is required.
           * Defaults to false.
           */
          encryptedState?: boolean;
          [k: string]: unknown;
        };
        /**
         * Base64 encoded session blob.
         */
        session?: string;
        [k: string]: unknown;
      };
      /**
       * AMD SEV-SNP flags defined by the SEV-SNP specifications.
       */
      snp?: {
        [k: string]: unknown;
      };
      /**
       * Intel Trust Domain Extensions (TDX).
       */
      tdx?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Required Memory related attributes of the instancetype.
     */
    memory: {
      /**
       * Required amount of memory which is visible inside the guest OS.
       */
      guest: number | string;
      /**
       * Optionally enables the use of hugepages for the VirtualMachineInstance instead of regular memory.
       */
      hugepages?: {
        /**
         * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
         */
        pageSize?: string;
        [k: string]: unknown;
      };
      /**
       * MaxGuest allows to specify the maximum amount of memory which is visible inside the Guest OS.
       * The delta between MaxGuest and Guest is the amount of memory that can be hot(un)plugged.
       */
      maxGuest?: number | string;
      /**
       * OvercommitPercent is the percentage of the guest memory which will be overcommitted.
       * This means that the VMIs parent pod (virt-launcher) will request less
       * physical memory by a factor specified by the OvercommitPercent.
       * Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully.
       * Defaults to 0
       */
      overcommitPercent?: number;
      [k: string]: unknown;
    };
    /**
     * NodeSelector is a selector which must be true for the vmi to fit on a node.
     * Selector which must match a node's labels for the vmi to be scheduled on that node.
     * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     *
     * NodeSelector is the name of the custom node selector for the instancetype.
     */
    nodeSelector?: {
      [k: string]: string;
    };
    /**
     * If specified, the VMI will be dispatched by specified scheduler.
     * If not specified, the VMI will be dispatched by default scheduler.
     *
     * SchedulerName is the name of the custom K8s scheduler for the instancetype.
     */
    schedulerName?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
